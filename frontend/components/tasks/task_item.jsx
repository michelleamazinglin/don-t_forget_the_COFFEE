import React from 'react';
import { withRouter, Link } from 'react-router-dom';



const taskItem = props => {

    return (
            <>
            <li>
                <Link to={`${props.listId}/${props.task.id}`}>{props.task.body}</Link>
                    <button onClick={() => props.deleteTask(props.task.id, props.listId)}>delete</button>
            </li>
            </>
        )
}

export default taskItem;