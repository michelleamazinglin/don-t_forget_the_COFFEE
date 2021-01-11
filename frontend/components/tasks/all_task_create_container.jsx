import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AllTaskCreate from './all_task_create';
import { createNoListTask } from '../../actions/task_actions';

const mapStateToProps = (state) => ({
    task: {
        body: '',
        completed: false,
    },
});

const mapDispatchToProps = dispatch => ({
    createNoListTask: (task) => dispatch(createNoListTask(task))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllTaskCreate));