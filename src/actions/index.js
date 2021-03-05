import * as c from './ActionTypes';

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const deleteGift = id => ({
  type: c.DELETE_GIFT,
  id
});