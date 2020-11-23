import { combineReducers } from 'redux';
import modal from './modal_reducer';
import selectiveList from './selectiveList';

export default combineReducers({
  modal,
  selectiveList,
});
