import * as c from './ActionTypes';

export const addGift = (gift) => {
  const { recipient, giftName, dollarAmount, id } = gift;
  return {
    type: c.ADD_GIFT,
    recipient: recipient,
    giftName: giftName,
    dollarAmount: dollarAmount,
    id: id
  }
}

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const deleteGift = id => ({
  type: c.DELETE_GIFT,
  id
});