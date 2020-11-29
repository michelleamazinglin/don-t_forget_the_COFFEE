import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    this.coffee = this.coffee.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.login(this.state)
      .then(() => this.props.history.push('/main'));
      //redirect
  }

  handleDemoSubmit() {
    const user = {
      username: 'demo',
      password: 'password'
    };
    this.props.login(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  coffee() {
    alert("you found the COFFEE!");
  }

  render() {
    return (
      <>
     
      <section className="login-container">
      <div className="left-half">
            <Link to="/" className="session-logo-wrap">
              <img src={window.logoUrl} alt="logo" width="100px" height="auto" />
              <p>Don't forget<br></br>the COFFEE</p>
            </Link>
        <div className="session-quote">
          <h2>"Nobody works better under pressure. They just work faster." -Brian Tracy</h2>
          <img src={coffeeUrl} alt="coffee" width="100" className="the-coffee" onClick={this.coffee} />
        </div>
        
      </div>

      <div className="right-half">
            
          <Link to="/signup"><button className="signup-button">Sign up for free</button></Link>
        <div className="session-wrap">
        <h2>Been here before? Welcome back!</h2>
        <div className="error-message">
              {this.renderErrors()}
              </div>
        <form onSubmit={this.handleSubmit}>
                
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
              placeholder="password"
            />
          </label>
          <label className="session-input">
            <button>Log In</button>
          </label>
        </form>

        <div className="session-input">
          <button onClick={this.handleDemoSubmit}>DEMO log in </button>
        </div>

        </div>
      </div>
      </section>
      </>
    );
  }
}

export default Login;
