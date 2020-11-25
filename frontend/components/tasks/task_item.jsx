import React from 'react';
import { withRouter, Link } from 'react-router-dom';



const taskItem = props => {

    return (
            <>
            <li>
                <Link to={`app/lists/${props.listId}/tasks/${props.task.id}`}>{props.task.body}</Link>
                    <button onClick={() => props.deleteTask(props.task.id, props.listId)}>delete</button>
            </li>
            </>
        )
}

export default taskItem;