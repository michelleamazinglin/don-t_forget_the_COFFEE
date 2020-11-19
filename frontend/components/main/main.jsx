import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';


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
                <div className="header-container">
                  <button className="header-button" onClick={this.handleLogout}>Log Out</button>
                  <p>this is the main page</p>
                </div>
            </>
        );
    };


};


export default Main;