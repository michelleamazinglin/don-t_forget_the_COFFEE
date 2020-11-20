import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListForm from './list_form'
import { createList } from '../../actions/list_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
    list: {
        title: 'Add List',
    },
    formType: 'Create List',
    errors: state.errors,
});

const mapDispatchToProps = dispatch => {
    return {
        action: post => dispatch(createList(list)),
        otherForm: (
            <button onClick={() => dispatch(openModal('createList'))}>
                Create list
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);