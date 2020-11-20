import { combineReducers } from 'redux';

import users from './users_reducer';
import lists from './lists_reducer'

export default combineReducers({
    users,
    lists,
});
