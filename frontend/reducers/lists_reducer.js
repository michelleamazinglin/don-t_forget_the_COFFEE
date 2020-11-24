import {
    RECEIVE_ALL_LISTS,
    RECEIVE_LIST,
    REMOVE_LIST,
} from '../actions/list_actions';


const ListsReducer = (oldState = {} , action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_LISTS:
            return action.lists;
        case RECEIVE_LIST:
            nextState[action.list.id] = action.list;
            return nextState
        case REMOVE_LIST:
            delete nextState[action.listId];
            return nextState
        default:
            return oldState;
    }
}

export default ListsReducer;