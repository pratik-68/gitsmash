// IMPORTING REACT AND ITS COMPONENT
import React, { Component } from 'react';

// IMPORTING ADD LOGIN AND RESETMESSAGE ACTION FROM ACTION FILE
import { addLoginUser, resetErrorValue } from '../redux/actions/actions';

// CONNECTING COMPONENT TO REDUX STORE
import { connect } from 'react-redux';

// IMPORTING REDIRECT & LINK Fn FROM REACT ROUTER DOM
import { Redirect, Link } from 'react-router-dom';

// IMPORTING COOKIES FROM REACT COOKIES
import Cookies from 'universal-cookie';

class Login extends Component {
  componentDidMount() {
    const cookie = new Cookies();
    const token = cookie.get('token');
    if (token) {
      this.props.history.push('/user');
    }
  }

  state = {
    username: '',
    token: '',
    empty_username: null,
    empty_token: null,
    invalid_user: null,
  };

  usernameOnChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  tokenOnChange = (e) => {
    this.setState({
      token: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.username === '') {
      this.setState({
        empty_username: 'Please Enter Username',
        invalid_user: null,
        empty_token: null,
      });
    } else if (this.state.token === '') {
      this.setState({
        empty_token: 'Please Enter Token',
        invalid_user: null,
        empty_username: null,
      });
    } else {
      this.props.addLoginUser(this.state.username, this.state.token);
    }
  };

  resetState = () => {
    this.setState({
      username: '',
      token: '',
      empty_username: null,
      empty_token: null,
      invalid_user: null,
    });
  };

  render() {
    let redirect = null;
    if (this.props.error === 'FAIL') {
      this.setState({
        invalid_user: 'Invalid Username or Token',
        empty_token: null,
        empty_username: null,
      });
    } else if (this.props.error === 'SUCCESS') {
      redirect = <Redirect to="/user" />;
    }
    this.props.resetErrorValue();
    return (
      <div>
        <div className="clearfix homeNav">
          {redirect}
          <div className="floatLeft ">
            <Link to="/">
              <button>Home</button>
            </Link>
          </div>
          <div className="floatLeft " onClick={this.resetState}>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        </div>
        <div className="usernameField">
          <h1>Enter Login Details : </h1>
          <form onSubmit={this.handleSubmit}>
            <p>
              <input
                type="text"
                className="textField"
                value={this.state.username}
                placeholder="Username"
                onChange={this.usernameOnChange}
              />
              <span className="emptyError">{this.state.empty_username}</span>
            </p>
            <p>
              <input
                type="password"
                className="textField"
                value={this.state.token}
                placeholder="token"
                onChange={this.tokenOnChange}
              />
              <span className="emptyError">{this.state.empty_token}</span>
            </p>
            <p className="textField">
              {this.state.invalid_user !== null ? (
                <div>{this.state.invalid_user} </div>
              ) : null}
            </p>
            <button className="textField"> Login</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.error,
  };
};

export default connect(mapStateToProps, { addLoginUser, resetErrorValue })(
  Login
);
