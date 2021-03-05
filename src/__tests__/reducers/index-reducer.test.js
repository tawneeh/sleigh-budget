import rootReducer from '../../reducers/index';
import firestoreReducer from '../../reducers/index';
import { createStore } from 'redux';
import giftListReducer from '../../reducers/gift-list-reducer';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import * as c from '../../actions/ActionTypes';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if there is no action type passed in', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterGiftList: {},
      formVisibleOnPage: false,
      firestore: { firestoreReducer }
    });
  });

  test('Check that initial state of giftListReducer matches the root reducer', () => {
    expect(store.getState().masterGiftList).toEqual(giftListReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that TOGGLE_FORM works for formVisibleReducer and root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

});