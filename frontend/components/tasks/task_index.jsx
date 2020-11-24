import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import TaskItem from './task_item';

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
            <p>this is the task index page</p>
            <ul>
                <li>
                        {
                            tasks.map(task => <TaskItem
                                task={task}
                                deleteTask={deleteTask}
                                key={task.id}
                            />
                            )
                            // for each list, render list item
                        }
                </li>
            </ul>
            </>
        )
    }
}

export default TaskIndex;