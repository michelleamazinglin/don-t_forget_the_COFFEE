import React from 'react';
import { connect } from 'react-redux';
import EditListForm from './edit_list_form';
import { fetchList, updateList } from '../../actions/list_actions';
import { openModal, closeModal } from '../../actions/modal_actions';



const mapStateToProps = (state) => ({
    list: state.entities.lists[state.ui.selectiveList],
});

const mapDispatchToProps = dispatch => {
    return {
        editList: list => dispatch(updateList(list)),
        fetchList: listId => dispatch(fetchList(listId)),
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditListForm)