import React from 'react';
import { withRouter, Link } from 'react-router-dom';



class ListSummary extends React.Component {
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

        const SortedTasks = tasks.sort(time);

        const TasksNum = tasks.length;

        return (
            <>
            <div className="middlebar">
               <p>{TasksNum}</p>
            </div>
            </>
        )
    }
}

export default ListSummary;