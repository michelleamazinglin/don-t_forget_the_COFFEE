import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateListForm from './create_list_form';
import { createList } from '../../actions/list_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createList: list => dispatch(createList(list)),
        clearSessionErrors: () => dispatch(clearSessionErrors()),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateListForm);