import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    fetchAllTasks,
    fetchTasks,
    fetchTask,
    createTask,
    updateTask,
    deleteTask
} from '../../actions/task_actions';
import Search from './search';

const mapStateToProps = (state, ownProps) => {

    return {
        currentUser: state.session.currentUser,
        tasks: Object.values(state.entities.tasks),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllTasks: () => dispatch(fetchAllTasks()),
        createTask: task => dispatch(createTask(task)),
        updateTask: task => dispatch(updateTask(task)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
