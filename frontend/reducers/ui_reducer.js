import { combineReducers } from 'redux';
import modal from './modal_reducer';
import selectiveList from './selectiveList';
import showCompletedReducer from './show_completed_reducer';



export default combineReducers({
  modal,
  selectiveList,
  showCompleted: showCompletedReducer,
});
