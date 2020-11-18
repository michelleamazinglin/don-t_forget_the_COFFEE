import React from 'react';

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
      <div className="session-form">
        <h2>Sign up for free.</h2>
        <form onSubmit={this.handleSubmit}>
          <label>First Name:
              <input
              type="text"
              value={this.state.first_name}
              onChange={this.update('first_name')}
              placeholder="First Name"
            />
          </label>

          <label>Last Name:
              <input
              type="text"
              value={this.state.last_name}
              onChange={this.update('last_name')}
              placeholder="Last Name"
            />
          </label>

          <label>Email:
              <input
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
          </label>

          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Username"
            />
          </label>
          
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
          </label>

          <input type="submit" value="Sign up!"/>

        </form>
      </div>
    );
  }
}

export default Signup;
