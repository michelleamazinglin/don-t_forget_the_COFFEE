import React from 'react';
import AllTasks from './all_task';
import {
    fetchAllTasks,
    fetchTasks,
    fetchTask,
    createTask,
    updateTask,
    deleteTask
} from '../../actions/task_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    // debugger
    const showCompleted = state.ui.showCompleted;
    const listId = parseInt(ownProps.match.params.listId);
    // debugger
    // console.log(state, ownProps)
    return {
        currentUser: state.session.currentUser,
        listId: listId,
        tasks: Object.values(state.entities.tasks),
        showCompleted: showCompleted,
        list: state.entities.lists[listId] || {id: 0, userId: 0, title: ''},
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllTasks: () => dispatch(fetchAllTasks()),
        fetchTask: id => dispatch(fetchTask(id)),
        updateTask: task => dispatch(updateTask(task)),
        deleteTask: (taskId, listId) => dispatch(deleteTask(taskId, listId)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllTasks));