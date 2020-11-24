import React from 'react';
import taskIndex from './task_index';
import {
    fetchTasks,
    fetchTask,
    createTask,
    updateTask,
    deleteTask
} from '../../actions/task_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    tasks: Object.values(state.entities.tasks)
});

const mapDispatchToProps = dispatch => {
    return {
        fetchTasks: () => dispatch(fetchTasks()),
        fetchTask: id => dispatch(fetchTask(id)),
        createTask: task => dispatch(createTask(task)),
        updateTask: task => dispatch(updateTask(task)),
        deleteTask: taskId => dispatch(deleteTask(taskId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(taskIndex);