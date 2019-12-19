import * as types from '../actions/ActionTypes';

export const initialState = {
  data: [],
  period: 'week',
  param: 'price',
};

export default function data(state = initialState, action) {  
  switch (action.type) {
  case types.SET_DATA:
    return {
      ...state,
      data: action.data,
    };
  case types.CHANGE_PERIOD:
    return {
      ...state,
      period: action.period,
    }
  case types.CHANGE_PARAM:
    return {
      ...state,
      param: action.param,
    };
  
  default:
    return state;
  }
}
