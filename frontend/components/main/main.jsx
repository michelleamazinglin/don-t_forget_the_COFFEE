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
import AllTaskContainer from '../tasks/all_task_container';
import SearchContainer from '../search/search_container';

class Main extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {search: ''};

        this.handleLogout = this.handleLogout.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.search = this.search.bind(this);
    } 

    handleLogout(e) {
        e.preventDefault();

        this.props.logout()
            .then(() => this.props.history.push('/'));
            //redirect
    }

    updateSearch(e) {
        this.setState({ search: e.target.value });
    }

    search(e) {
        e.preventDefault();
        this.props.history.push(`/search/${this.state.search}`);
    }

    render() {
        return (
            <>
            <div className="main-page">
                <header className="main-page-header">
                    <div className="main-page-header-icon">
                        <a target="_blank" href="https://github.com/michelleamazinglin"><img src={githubUrl} alt="Github" width="25" /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/michelle-lin-9b9b8614b/"><img src={linkedinUrl} alt="Linkedin" width="25" /></a>
                    </div>
                    <div className="search-bar-container">
                        
                        <form onSubmit={this.search}>
                            <input onChange={this.updateSearch} value={this.state.search} placeholder="Search for tasks..."/>
                        </form>
                    </div>
                    <div className="main-page-header-logout">
                        <button className="header-button" onClick={this.handleLogout}>Log Out</button>
                    </div>
                </header>
                <div className="main-page-wrap">
                    <Sidebar />
                    <Switch>
                        <Route path="/app/all" component={AllTaskContainer} />
                    </Switch>

                    <Switch>
                        <Route exact path="/app/lists/:listId" component={TaskIndexContainer} />
                    </Switch>

                    <Switch>
                        <Route exact path="/app/lists/:listId/:taskId" component={TaskShowContainer} />
                    </Switch>   

                    <Switch>
                        <Route path="/search/:searchTerm" component={SearchContainer} />
                    </Switch>                 
                </div>
            </div>
            </>
        );
    };


};


export default Main;