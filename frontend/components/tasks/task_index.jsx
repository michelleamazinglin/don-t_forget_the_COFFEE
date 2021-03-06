import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import TaskItem from './task_item';
import CreateTaskFormContainer from './create_task_form_container';


class TaskIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTasks(this.props.listId);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.listId != this.props.listId) {
            this.props.fetchTasks(this.props.listId) 
        } 
    }

    

    render() {
        const time = (a, b) => {
            if (a.update_at < b.update_at) {
                return 1;
            } else {
                return -1;
            }
        };

        const { tasks, deleteTask, listId, list } = this.props;

        const SortedTasks = tasks.sort(time);

        const TasksNum = tasks.length;
        // debugger
        return (
            <>
            <div className="middlebar">
                <CreateTaskFormContainer />
                <ul className="task-items">
                    
                    {
                        SortedTasks.map(task => <TaskItem
                            task={task}
                            deleteTask={deleteTask}
                            key={`list-${task.id}`}
                            listId={listId}
                        />
                            )
                                // for each list, render list item
                    }

                </ul>
            </div>
            <div className="list-summary-fake">
                <h3>{list.title}</h3>
                    <div className="list-summary-content">
                        <div className="list-summary-item">
                            <p>{TasksNum}</p>
                            <p> {(TasksNum < 2) ? 'task' : 'tasks'} </p>  
                        </div>
                    </div>
             </div>
        

            </>
        )
    }
}

export default TaskIndex;