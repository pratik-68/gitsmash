import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import User from '../components/User';
import Cookies from 'universal-cookie';

class Home extends Component {
  state = {
    username: '',
  };

  componentDidMount() {
    const cookie = new Cookies();
    const token = cookie.get('token');
    if (token) {
      if (this.props.match.params.username !== undefined) {
        this.props.history.push(`/user/${this.props.match.params.username}`);
      } else this.props.history.push('/user');
    }
    if (this.props.match.params.username !== undefined) {
      this.setState({ username: this.props.match.params.username });
    }
  }

  handleSubmit = (id) => {
    this.setState({ username: id });
    this.props.history.push(`/${id}`);
  };

  resetUsername = () => {
    this.setState({ username: '' });
  };

  render() {
    return (
      <div>
        <div>
          <div className="clearfix homeNav">
            <div className="floatLeft ">
              <Link to="/" onClick={this.resetUsername}>
                <button>Home</button>
              </Link>
            </div>
            <div className="floatLeft ">
              <Link to="/login">
                <button>Login</button>
              </Link>
            </div>
          </div>
          <Search handleSubmit={this.handleSubmit} />
          {this.state.username !== '' ? (
            <User username={this.state.username} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Home;
