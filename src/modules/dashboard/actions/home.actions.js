
export const SET_CSV_DATA = 'modules/home/SET_CSV_DATA';
export const RESET_CSV_DATA = 'modules/home/RESET_CSV_DATA';
export const START_IMPORT = 'modules/home/START_IMPORT';

export const setCsvData = (data) => ({
  type: SET_CSV_DATA,
  data,
});

export const resetCsvData = () => ({
  type: RESET_CSV_DATA,
});

export const startImport = (idField, path, csvData) => ({
  type: START_IMPORT,
  idField,
  path,
  csvData,
});
