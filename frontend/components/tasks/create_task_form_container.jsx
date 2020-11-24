import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateTaskForm from './create_task_form';
import { createTask } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => ({
    task: {
        body: '',
        list_id: ownProps.match.params.listId,
    }
});

const mapDispatchToProps = dispatch => ({
    createTask: task => dispatch(createTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskForm);