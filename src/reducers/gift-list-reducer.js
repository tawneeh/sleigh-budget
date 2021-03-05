import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { recipient, giftName, dollarAmount, id } = action;
  switch (action.type) {
  case c.DELETE_GIFT:
    let newState = { ...state };
    delete newState[id];
    return newState;

  default:
    return state;
  }
};