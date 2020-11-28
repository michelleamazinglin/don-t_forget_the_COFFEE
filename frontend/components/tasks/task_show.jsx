import React from 'react';
import { withRouter } from 'react-router-dom';
import TaskIndexContainer from '../tasks/task_index_container';

class TaskShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (  
            <>
            
            <div className="task-show-page">
                <p>this is the task show page</p>
            </div>
            </>
        )
    }

}

export default TaskShow;