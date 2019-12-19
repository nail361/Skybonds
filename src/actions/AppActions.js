import * as types from './ActionTypes';

export function getData(period, param) {
  return {
    type: types.GET_DATA,
    period,
    param,
  };
}

export function changePeriod(period) {
  return {
    type: types.CHANGE_PERIOD,
    period,
  };
}

export function changeParam(param) {
  return {
    type: types.CHANGE_PARAM,
    period,
  };
}
