import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Modal from '../modal/modal';



const listItem = props => {
    return(
        <>
        <Modal />
        <li className="list-item">
            <Link to={`/app/lists/${props.list.id}`} id='list-text'>{props.list.title}</Link>
            <div className="list-drop-down">
                <button onClick={() => props.openModal('editList', props.list.id)}>Rename</button>
                <button onClick={() => props.deleteList(props.list.id)}>delete</button>
            </div>
        </li>
        </>
    )
}

export default listItem;