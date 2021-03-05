import giftListReducer from './gift-list-reducer';
import formVisibleReducer from './form-visible-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterGiftList: giftListReducer,
  formVisibleOnPage: formVisibleReducer
});

export default rootReducer;