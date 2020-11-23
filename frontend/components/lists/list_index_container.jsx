import React from 'react';
import ListIndex from './list_index';
import {
    fetchLists,
    fetchList,
    createList,
    updateList,
    deleteList
} from '../../actions/list_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
    lists: Object.values(state.entities.lists)
});

const mapDispatchToProps = dispatch => {
    return {
        fetchLists: () => dispatch(fetchLists()),
        fetchList: id => dispatch(fetchList(id)),
        createList: list => dispatch(createList(list)),
        updateList: list => dispatch(updateList(list)),
        deleteList: listId => dispatch(deleteList(listId)),
        openModal: (modal, listId) => dispatch(openModal(modal, listId)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);
