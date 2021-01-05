import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import AllTaskItem from './all_task_item';
import AllTaskCreate from './all_task_create_container';


class AllTasks extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllTasks();
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
        // console.log(SortedTasks)
        const TasksNum = tasks.length;
        // debugger
        return (
            <>
            <div className="middlebar">
                <AllTaskCreate />
                <ul className="task-items">
                    
                    {
                        SortedTasks.map(task => <AllTaskItem
                            task={task}
                            deleteTask={deleteTask}
                            key={`list-${task.id}`}
                            listId={task.listId}
                        />
                            )
                                // for each list, render list item
                    }

                </ul>
            </div>
            <div className="list-summary-fake">
                <h3>All Tasks</h3>
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

export default AllTasks;