import React from 'react';
import { withRouter, Link } from 'react-router-dom';



const searchItem = props => {
    return (
            <>
            <li className="task-item">
                <div>
                    <input type="checkbox"
                    />
                    <Link to={`/app/lists/${props.task.listId}/${props.task.id}`}>{props.task.body}</Link>
                </div>
                <button onClick={() => props.deleteTask(props.task.id, props.listId)}>delete</button>
            </li>
            </>
        )
}

export default withRouter(searchItem);