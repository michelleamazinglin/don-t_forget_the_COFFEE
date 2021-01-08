import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TaskShow from './task_show'
import { updateTask, deleteTask } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
    const taskId = parseInt(ownProps.match.params.taskId);
    const currentTask = state.entities.tasks[taskId];
    // create if condition
    // console.log(ownProps)
    return {
        currentTask: currentTask,
        taskId: taskId,
        lists: Object.values(state.entities.lists),
        listId: parseInt(ownProps.match.params.listId),
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTasks: (listId) => dispatch(fetchTasks(listId)),
        updateTask: (task, listId) => dispatch(updateTask(task, listId)),
        deleteTask: (taskId, listId) => dispatch(deleteTask(taskId, listId)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskShow));