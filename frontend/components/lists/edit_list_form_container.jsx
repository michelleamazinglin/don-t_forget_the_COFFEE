import React from 'react';
import { connect } from 'react-redux';
import ListForm from './list_form';
import { fetchList, updateList } from '../../actions/list_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => ({
    list: {
        title: '',
    },
    formType: 'Rename List'
});

const mapDispatchToProps = dispatch => {
    return {
        action: list => dispatch(updateList(list)),
        fetchList: listId => dispatch(fetchList(listId)),
        otherForm: (
            <button onClick={() => dispatch(openModal('editList'))}>
                edit list
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListForm)