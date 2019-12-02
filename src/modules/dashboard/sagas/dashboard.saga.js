import { takeEvery, put } from 'redux-saga/effects';
import { showNotification } from '../../../actions/app.actions';
import { resetCsvData, START_IMPORT } from '../actions/home.actions';
import { db } from '../../../utils/firebase';

function* startImport(action) {
  const { idField, path, csvData } = action;
  const collectionRef = db.collection(path);

  try {
    yield put(showNotification('Started writing records', 'primary'));
    const promises = idField === 'random'
      ? csvData.map((doc) => collectionRef.add(doc))
      : csvData.map((doc) => collectionRef.doc(doc[idField].toString()).set(doc));
    yield Promise.all(promises);
    yield put(showNotification('Done writing records', 'primary'));
    yield put(resetCsvData());
  } catch (error) {
    yield put(showNotification('Error writing records'));
    console.log('==========error==========', error);
  }
}

function* dashboardSaga() {
  yield takeEvery(START_IMPORT, startImport);
}

export default dashboardSaga;
