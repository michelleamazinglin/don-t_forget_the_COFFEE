import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    fetchAllTasks,
    createTask,
    updateTask,
    deleteTask
} from '../../actions/task_actions';
import Search from './search';

const mapStateToProps = (state, ownProps) => {
    const allTasks = Object.values(state.entities.tasks);
    const searchTerm = ownProps.match.params.searchTerm.toLowerCase();
    const searchedTasks = allTasks.filter(task => {
        return(task.body.toLowerCase().includes(searchTerm));
    });
    // console.log(ownProps)
    return {
        currentUser: state.session.currentUser,
        tasks: Object.values(state.entities.tasks),
        searchedTasks: searchedTasks,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllTasks: () => dispatch(fetchAllTasks()),
        createTask: (task, listId) => dispatch(createTask(task, listId)),
        updateTask: task => dispatch(updateTask(task)),
        deleteTask: (taskId, listId) => dispatch(deleteTask(taskId, listId)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
