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
import Modal from '../modal/modal';

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
                <Modal />
                <div className="header-container">
                    <button className="header-button" onClick={this.handleLogout}>Log Out</button>
                    <p>this is the main page</p>
                    <button onClick={() => this.props.openModal('createList')}>Create List</button>
                    <button onClick={() => this.props.openModal('editList')}>Edit List</button>
                </div>
                
            </>
        );
    };


};


export default Main;