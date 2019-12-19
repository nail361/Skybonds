import * as types from '../actions/ActionTypes';

export const initialState = {
  data: [],
  period: 'week',
  param: 'price',
};

export default function data(state = initialState, action) {
  switch (action.type) {
  case types.GET_DATA:
    return {
      ...state,
      ...{
        tasks: [...action.tasks],
        totalTaskCount: action.totalTaskCount,
      },
    };
  case types.CHANGE_PERIOD:
    return {
      ...state,
      ...{
        tasks: [...state.tasks.map((task) => {
          if (task.id === action.id) {
            const newTask = {
              ...task,
              ...{
                text: action.text,
                status: action.status,
              },
            };
            return newTask;
          }
          return task;
        })],
      },
    };
  case types.CHANGE_PARAM:
    return {
      ...state,
      orderField: action.orderField,
    };
  
  default:
    return state;
  }
}
