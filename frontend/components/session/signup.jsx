import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      username: '',
      password: '',
    };
    //local state

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state) 
      .then(() => this.props.history.push('/'));
      //redirect 
  }

  render() {
    // console.log(this.props);
    return (
      <>
        <section className="signup-container">
          <div className="left-half">
            <Link to="/" className="session-logo-wrap">
              <img src={window.logoUrl} alt="logo" width="100px" height="auto" />
              <p>Don't forget<br></br>the COFFEE</p>
            </Link>
            <div className="session-quote">
              <h2>Join millions of people getting more organized and productive!</h2>
              <img src={coffeeUrl} alt="coffee" width="100" className="the-coffee" />
             </div>
          </div>
          <div className="right-half">
            <Link to="/login"> <button className="signup-button">Log in</button></Link>
          <div className="session-wrap">
            <h2>Sign up for free.</h2>
        <form onSubmit={this.handleSubmit}>
          <label className="session-input">
              <input
              type="text"
              value={this.state.first_name}
              onChange={this.update('first_name')}
              placeholder="First Name"
            />
          </label>

          <label className="session-input">
              <input
              type="text"
              value={this.state.last_name}
              onChange={this.update('last_name')}
              placeholder="Last Name"
            />
          </label>

          <label className="session-input">
              <input
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
          </label>

          <label className="session-input">
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Username"
            />
          </label>
          
          <label className="session-input">
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
          </label>

          <label className="session-input">
            <button>Sign up</button>
          </label>

        </form>
          </div>
          </div>
      </section>
      </>
    );
  }
}

export default Signup;
