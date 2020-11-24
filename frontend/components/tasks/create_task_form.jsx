import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateTaskForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.task;

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        const task = this.state;
        this.setState({ body: '' });
        this.props.createTask(task);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Add a Task</h1>
                <label>Please enter Task name:<br></br>
                    <input type="text"
                        value={this.state.body}
                        onChange={this.update('body')}
                    />
                </label>
                <button onSubmit={this.handleSubmit}>Save</button>
            </form>
        )
    }
}

export default CreateTaskForm;