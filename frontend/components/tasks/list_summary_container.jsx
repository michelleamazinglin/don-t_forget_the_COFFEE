import React from 'react';
import ListSummary from './list_Summary';
import {
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
    return {
        listId: listId,
        tasks: Object.values(state.entities.tasks).filter(task => {
            // debugger
            return task.listId === listId
        }),
        showCompleted: showCompleted,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTasks: (listId) => dispatch(fetchTasks(listId)),
        fetchTask: id => dispatch(fetchTask(id)),
        createTask: task => dispatch(createTask(task)),
        updateTask: task => dispatch(updateTask(task)),
        deleteTask: (taskId, listId) => dispatch(deleteTask(taskId, listId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListSummary);