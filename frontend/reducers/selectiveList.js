import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default function modalReducer(state = null, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return action.listId ? action.listId : null;
            // edit we need a id, but new list we dont need an id
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
}
