import React from 'react';
import { withRouter } from 'react-router-dom';
import TaskIndexContainer from '../tasks/task_index_container';

class TaskShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.currentTask;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.lists = this.lists.bind(this);
        this.update = this.update.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }
    // 这里或者上面的submit有问题，listId在submit的时候没有改变。
    lists() {
        return this.props.lists.map(list => {
            return (
                <option
                key={list.id} value={list.id} >
                {list.title}
                </option>
            );
        });
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const task = this.state;
        this.props.updateTask(task, this.props.listId).then((action) => {
            this.props.history.push(`${this.props.match.url.split('/').slice(0,-1).join('/')}`);
        });
        
    }

    handleUpdateComplete(e) {
        const newState = Object.assign({}, this.state, {completed: e.target.checked});

        this.props.updateTask(newState).then((action) => {
            this.props.history.push(`${this.props.match.url.split('/').slice(0,-1).join('/')}`);
        });3
    }

    deleteTask() {
        this.props.deleteTask(this.props.currentTask.id, this.props.listId);
        this.props.history.push(`${this.props.match.url.split('/').slice(0,-1).join('/')}`);
    }

    render() {
        return (  
            <>
            
            <div className="task-show-page">
                <div className="task-show-close">
                    <span onClick={this.handleSubmit}>All Tasks</span>
                    <span onClick={this.handleSubmit}>close X</span>    
                </div>
                <form onSubmit={this.handleSubmit} className="task-edit-form">
                    <input className="task-edit-body" onChange={this.update('body')} type="text" value={this.state.body} placeholder="title" />
                    <label className="task-edit-list">list
                        <select value={this.state.listId} onChange={this.update('listId')}>
                        {this.lists()}
                        </select>
                    </label>
                    <div className="task-edit-button">
                        <input type="submit" className="edit-task"  defaultValue="Save" />
                        <input type="button" className="delete-task" onClick={this.deleteTask} defaultValue="Delete" />
                    </div>
                </form>
            </div>

            
            </>
        )
    }

}

export default TaskShow;