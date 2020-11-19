import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.login(this.state)
      .then((user) => this.props.history.push('/'));
      //redirect
  }

  handleDemoSubmit() {
    const user = {
      username: 'demo',
      password: 'password'
    };
    this.props.login(user);
  }

  render() {
    return (
      <>
     
      <section className="login-container">
      <div className="left-half">
        <div className="session-quote">
          <h2>"Nobody works better under pressure. They just work faster." -Brian Tracy</h2>
          <img src={coffeeUrl} alt="coffee" width="100" className="the-coffee" />
        </div>
        
      </div>

      <div className="right-half">
      <div className="session-wrap">
        <h2>Been here before? Welcome back!</h2>
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
