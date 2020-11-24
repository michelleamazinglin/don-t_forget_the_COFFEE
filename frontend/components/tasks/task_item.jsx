import React from 'react';
import { withRouter, Link } from 'react-router-dom';



class taskItem extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <>
                <li>
                    <p>{this.props.tasks}</p>
                    <button onClick={() => props.deleteTask(this.props.task.id)}>delete</button>
                </li>
            </>
        )
    };
};

export default taskItem;