import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import TaskItem from './task_item';
import CreateTaskFormContainer from './create_task_form_container'

class TaskIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTasks();
    }

    render() {
        const { tasks, deleteTask } = this.props;
        return (
            <>
            <div className="middlebar">
            <p>this is the task index page</p>
            <CreateTaskFormContainer />
            <ul>
                <li>
                        {
                            tasks.map(task => <TaskItem
                                task={task}
                                deleteTask={deleteTask}
                                key={`list-${task.id}`}
                            />
                            )
                            // for each list, render list item
                        }
                </li>
            </ul>
            </div>
            </>
        )
    }
}

export default TaskIndex;