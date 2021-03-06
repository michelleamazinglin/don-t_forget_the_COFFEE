import React from 'react';
import { withRouter } from 'react-router-dom';

class AllTaskCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: '',
            user_id: this.props.currentUser,
            completed: false,
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        const task = this.state;
        this.setState({ body: ''});
        this.props.createNoListTask(task);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }
    
    render() {
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

export default withRouter(AllTaskCreate);