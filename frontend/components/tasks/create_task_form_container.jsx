import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateTaskForm from './create_task_form';
import { createTask } from '../../actions/task_actions';

const mapStateToProps = (state, ownprops) => ({
    task: {
        body: '',
        listId: ownprops.match.params.listId,
        completed: false,
    }
});

const mapDispatchToProps = dispatch => ({
    createTask: (task, listId) => dispatch(createTask(task, listId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateTaskForm));