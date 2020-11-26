import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateTaskForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: '',
            task: this.props.task,
            listId: this.props.task.listId,
            completed: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        const task = this.state;
        this.setState({ body: '' });
        this.props.createTask(task, this.props.task.listId);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }
    
    render() {
        console.log(this.state.listId)
        console.log(this.props)
        return (
            <>
            <form onSubmit={this.handleSubmit} className="create-task-form">
                    <input type="text"
                        value={this.state.body}
                        onChange={this.update('body')}
                        placeholder="Add a task..."
                    />
                <button onSubmit={this.handleSubmit}>Add Task</button>
            </form>
            </>
        )
    }
}

export default CreateTaskForm;