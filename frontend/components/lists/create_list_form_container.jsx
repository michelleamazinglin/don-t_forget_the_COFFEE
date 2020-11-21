import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListForm from './list_form'
import { createList } from '../../actions/list_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
    list: {
        title: '',
    },
    formType: 'Add a list',
    errors: errors.list,
});

const mapDispatchToProps = dispatch => {
    return {
        action: post => dispatch(createList(list)),
        clearSessionErrors: () => dispatch(clearSessionErrors()),
        otherForm: (
            <button onClick={() => dispatch(openModal('createList'))}>
                Create a list
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);