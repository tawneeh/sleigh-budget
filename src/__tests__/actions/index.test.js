import * as actions from './../../actions';
import * as c from '../../actions/ActionTypes';

describe('sleigh budget actions', () => {

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('deleteGift should create DELETE_GIFT action', () => {
    expect(actions.deleteGift(1)).toEqual({
      type: c.DELETE_GIFT,
      id: 1
    });
  });

});