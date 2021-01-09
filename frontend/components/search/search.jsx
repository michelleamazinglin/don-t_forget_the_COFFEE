import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchItem from './search_item';

class Search extends React.Component {
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

        const { searchedTasks, deleteTask } = this.props;

        const SortedTasks = searchedTasks.sort(time);

        const TasksNum = searchedTasks.length;
        // debugger
        return (
            <>
            <div className="middlebar">

                <ul className="task-items">
                    
                    {
                        SortedTasks.map(task => <SearchItem
                            task={task}
                            deleteTask={deleteTask}
                            key={`list-${task.id}`}
                            // listId={listId}
                            url={this.props.match.url}
                        />
                            )
                                // for each list, render list item
                    }

                </ul>
            </div>
            <div className="list-summary-fake">
                <h3>Search</h3>
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
};


export default withRouter(Search);
