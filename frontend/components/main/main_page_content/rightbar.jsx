import React from 'react';
import TaskShowContainer from '../../tasks/task_show_container';
import { Link } from 'react-router-dom';

const Rightbar = () => {
    return (
        <div className="rightbar">
            <TaskShowContainer />
        </div>
    );
};

export default Rightbar;