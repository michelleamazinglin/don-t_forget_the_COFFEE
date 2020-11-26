import React from 'react';
import CreateListContainer from '../lists/create_list_form_container';
import EditListContainer from '../lists/edit_list_form_container';
import TaskShowContainer from '../tasks/task_show_container'
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import ListIndexContainer from '../lists/list_index_container';
import Sidebar from './main_page_content/sidebar';
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
            <div className="main-page">
                <header className="main-page-header">
                    <nav className="main-page-nav">
                    </nav>
                    <div className="main-page-header-icon">
                        <a href="https://github.com/michelleamazinglin"><img src={githubUrl} alt="Github" width="25" /></a>
                        <a href="https://www.linkedin.com/in/michelle-lin-9b9b8614b/"><img src={linkedinUrl} alt="Linkedin" width="25" /></a>
                    </div>
                    <div className="main-page-header-logout">
                        <button className="header-button" onClick={this.handleLogout}>Log Out</button>
                    </div>
                </header>
                <div className="main-page-wrap">
                    <Sidebar />
                    <Switch>
                        <Route exact path="/app/lists/:listId" component={TaskIndexContainer} />
                    </Switch>

                    <Switch>
                        <Route exact path="/app/lists/:listId/:taskId" component={TaskShowContainer} />
                    </Switch>
                    <div className="list-summary-fake">
                            <h3>All Tasks</h3>
                            <div className="list-summary-content">
                            <div className="list-summary-item">
                                <p>25</p>
                                <p>tasks</p>
                            </div>
                            <div className="list-summary-item">
                                <p>2hr</p>
                                <p>estimated</p>
                            </div>
                            <div className="list-summary-item">
                                <p>1</p>
                                <p>overdue</p>
                            </div>
                            <div className="list-summary-item">
                                <p>4</p>
                                <p>completed</p>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
            </>
        );
    };


};


export default Main;