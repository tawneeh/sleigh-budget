import giftListReducer from '../../reducers/gift-list-reducer';
import * as c from '../../actions/ActionTypes';

describe('giftListReducer', () => {

  const currentState = {
    1: {recipient: 'Bob',
    giftName: 'Watch',
    dollarAmount: '50',
    id: 1},
    2: {recipient: 'Steve',
    giftName: 'Slippers',
    dollarAmount: '25',
    id: 2}
  }

  let action;
  const giftData = {
    recipient: 'Bob',
    giftName: 'Watch',
    dollarAmount: '50',
    id: 1
  };

  test('Should return default state if there is no action type passed in', () => {
    expect(giftListReducer({}, { type: null })).toEqual({});
  });

  test('Should add new gift data to the masterGiftList', () => {
    const { recipient, giftName, dollarAmount, id } = giftData;
    action = {
    type: c.ADD_GIFT,
    recipient: recipient,
    giftName: giftName,
    dollarAmount: dollarAmount,
    id: id
    };

    expect(giftListReducer({}, action)).toEqual({
      [id] : {
      recipient: recipient,
      giftName: giftName,
      dollarAmount: dollarAmount,
      id: id
      }
    });
  });

  test('Should successfully delete a gift', () => {
    action = {
      type: c.DELETE_GIFT,
      id: 1
    };
    expect(giftListReducer(currentState, action)).toEqual({
      2: {recipient: 'Steve',
      giftName: 'Slippers',
      dollarAmount: '25',
      id: 2}
    });
  });

});