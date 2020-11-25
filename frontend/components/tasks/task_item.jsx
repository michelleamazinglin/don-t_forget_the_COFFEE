import React from 'react';
import { withRouter, Link } from 'react-router-dom';



const taskItem = props => {

    return (
            <>
            <li>
                <Link to={`${props.url}/${props.task.id}`}>{props.task.body}</Link>
                    <button onClick={() => props.deleteTask(props.task.id)}>delete</button>
            </li>
            </>
        )
}

export default taskItem;