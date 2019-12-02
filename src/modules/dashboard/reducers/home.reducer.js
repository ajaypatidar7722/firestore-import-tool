import { SET_CSV_DATA, RESET_CSV_DATA } from '../actions/home.actions';

const initialState = {
  csvData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CSV_DATA:
      return {
        ...state,
        csvData: action.data,
      };

    case RESET_CSV_DATA:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
