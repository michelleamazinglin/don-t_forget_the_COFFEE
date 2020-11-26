import React from 'react';
import TaskIndexContainer from '../../tasks/task_index_container';
import { Link } from 'react-router-dom';

const Middlebar = () => {
    return (
        <div className="middlebar">
            <TaskIndexContainer />
        </div>
    );
};

export default Middlebar;