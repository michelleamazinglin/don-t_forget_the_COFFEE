import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import TaskItem from './task_item';
import CreateTaskFormContainer from './create_task_form_container'

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

        const { tasks, deleteTask, listId } = this.props;

        const SortedTask = tasks.sort(time)

        return (
            <>
            <div className="middlebar">
                <div className="completed">
                    <p>Incomplete</p>
                    <p>Completed</p>
                </div>
                <CreateTaskFormContainer />
                <ul className="task-items">
                    
                    {
                        SortedTask.map(task => <TaskItem
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
            </>
        )
    }
}

export default TaskIndex;