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

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => {
    return {
        fetchLists: () => dispatch(fetchLists()),
        fetchList: id => dispatch(fetchList(id)),
        createList: list => dispatch(createList(list)),
        updateList: list => dispatch(updateList(list)),
        deleteList: id => dispatch(deleteList(id)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);