import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import TaskItem from './task_item';
import CreateTaskFormContainer from './create_task_form_container'


const taskItem = props => {
    return (
            <>
            <li className="task-item">
                <div>
                    <input type="checkbox"
                    />
                    <Link to={`${props.listId}/${props.task.id}`}>{props.task.body}</Link>
                </div>
                <button onClick={() => props.deleteTask(props.task.id, props.listId)}>delete</button>
            </li>
            </>
        )
}

export default withRouter(taskItem);