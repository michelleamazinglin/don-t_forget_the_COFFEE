import React from 'react';
import CreateListContainer from '../lists/create_list_form_container';
import EditListContainer from '../lists/edit_list_form_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import ListIndexContainer from '../lists/list_index_container';
import Sidebar from '../sidebar/sidebar';
import TaskIndexContainer from '../tasks/task_index_container';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    } 

    handleLogout(e) {
        e.preventDefault();

        this.props.logout()
            .then(() => this.props.history.push('/'));
            //redirect
    }

    render() {
        return (
            <>
                <header className="main-page-header">
                    <nav className="main-page-nav">
                    </nav>
                    <div className="main-page-header-icon">
                        <button className="header-button" onClick={this.handleLogout}>Log Out</button>
                    </div>
                </header>
                <Sidebar />
                <TaskIndexContainer />
                <div className="main-page-content">
                </div>
            </>
        );
    };


};


export default Main;