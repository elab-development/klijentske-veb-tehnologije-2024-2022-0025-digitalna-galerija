// LoginManager.tsx

import { Component, ChangeEvent } from 'react';
import { LoginManagerProps } from '../models/LoginManagerProps';

interface LoginManagerState {
  username: string;
  password: string;
  error: string;
}

class LoginManager extends Component<LoginManagerProps, LoginManagerState> {
  constructor(props: LoginManagerProps) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: ''
    };
  }

  handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: e.target.value });
  };

  handleLogin = () => {
    const { username, password } = this.state;
    const { users } = this.props;
    const user = users.find(user => user.username === username);

    if (!user || user.password !== password) {
      this.setState({ error: 'Invalid username or password.' });
    } else {
      console.log('Logged in successfully as:', user.username);
      // Redirect to profile page
      window.location.href = `/photographer/${user.username}`;
    }
  };

  render() {
    const { username, password, error } = this.state;

    return (
      <div className="container">
        <h1>Login</h1>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={this.handlePasswordChange}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <div className="button-container">
          <button onClick={this.handleLogin}>Login</button>
        </div>
      </div>
    );
  }
}

export default LoginManager;
