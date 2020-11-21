import * as APIUtil from '../util/list';

export const RECEIVE_ALL_LISTS = 'RECEIVE_ALL_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const RECEIVE_LIST_ERRORS = 'RECEIVE_LIST_ERRORS';

const receiveLists = lists => {
    return {
        type: RECEIVE_ALL_LISTS,
        lists: lists
    }
};

const receiveList = list => {
    return {
        type: RECEIVE_LIST,
        list: list
    }
};

const removeList = listId => {
    return {
        type: REMOVE_LIST,
        listId: listId
    }
};

const receiveErrors = errors => ({
    type: RECEIVE_LIST_ERRORS,
    errors
});

export const fetchLists = () => dispatch => {
    return APIUtil.fetchLists()
        .then(lists => dispatch(receiveLists(lists)))
}

export const fetchList = listId => dispatch => {
    return APIUtil.fetchList(listId)
        .then(list => dispatch(removeList(list)))
}

export const createList = list => dispatch => {
    return APIUtil.createList(list)
        .then(createdList => dispatch(receiveList(createdList))),
        err => (
            dispatch(receiveErrors(err.responseJSON))
        )
}

export const updateList = list => dispatch => {
    return APIUtil.updateList(list)
        .then(updatedList => dispatch(receiveList(updatedList))),
        err => (
            dispatch(receiveErrors(err.responseJSON))
        )
}

export const deleteList = listId => dispatch => {
    return APIUtil.deleteList(listId)
        .then(() => dispatch(removeList(listId)))
}

export const clearSessionErrors = () => dispatch => {
    dispatch(receiveErrors([]));
};