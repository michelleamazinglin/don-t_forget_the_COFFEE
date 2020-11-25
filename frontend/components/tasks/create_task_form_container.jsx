import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateTaskForm from './create_task_form';
import { createTask } from '../../actions/task_actions';

const mapStateToProps = (state) => ({
    task: {
        body: '',
        list_id: state.entities.lists.id
    }
});

const mapDispatchToProps = dispatch => ({
    createTask: task => dispatch(createTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskForm);