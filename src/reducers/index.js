import giftListReducer from './gift-list-reducer';
import formVisibleReducer from './form-visible-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  masterGiftList: giftListReducer,
  formVisibleOnPage: formVisibleReducer,
  firestore: firestoreReducer
});

export default rootReducer;