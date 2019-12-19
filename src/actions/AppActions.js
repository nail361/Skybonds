import * as types from './ActionTypes';

export function setData(data) {
  return {
    type: types.SET_DATA,
    data
  };
}

export function changePeriod(period) {
  return (dispatch) => {
    return new Promise((resolve) => {
      dispatch(
        {
          type: types.CHANGE_PERIOD,
          period,
        },
      );
      resolve();
    });
  };
}

export function changeParam(param) {
  return {
    type: types.CHANGE_PARAM,
    param,
  };
}
