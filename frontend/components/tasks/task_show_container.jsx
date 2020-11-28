import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TaskShow from './task_show'
import { updateTask, deleteTask } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
    const taskId = ownProps.match.params.taskId;
    const currentTask = state.entities.tasks[taskId];
    return {
        currentTask: currentTask,
        taskId: taskId,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTasks: (listId) => dispatch(fetchTasks(listId)),
        updateTask: (task, listId) => dispatch(updateTask(task, listId)),
        deleteTask: (taskId, listId) => dispatch(deleteTask(taskId, listId)),
    };
};

export default (connect(mapStateToProps, mapDispatchToProps)(TaskShow));