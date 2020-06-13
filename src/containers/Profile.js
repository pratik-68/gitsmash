import React, { Component } from 'react';
import { refreshAuth } from '../redux/actions/actions';
import Cookies from 'universal-cookie';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

// IMPORTING COMPONENTS FROM COMPONENTS FOLDER
import Search from '../components/Search';
import User from '../components/User';
import ProfileUser from '../components/ProfileUser';

class Profile extends Component {
  state = {
    username: '',
    toProfile: false,
  };

  componentDidMount() {
    const cookie = new Cookies();
    const token = cookie.get('token');
    if (token) {
      this.props.refreshAuth(token);
    } else {
      if (this.props.match.params.username !== undefined) {
        this.props.history.push(`/${this.props.match.params.username}`);
      } else this.props.history.push('/');
    }
    if (this.props.match.params.username !== undefined) {
      this.handleSubmit(this.props.match.params.username);
    }
  }

  handleSubmit = (id) => {
    if (id === this.props.User.login) {
      this.setState({
        username: '',
        toProfile: true,
      });
    } else {
      this.setState({
        username: id,
        toProfile: false,
      });
    }
    this.props.history.push(`/user/${id}`);
  };

  setProfile = (e) => {
    this.setState({
      username: '',
      toProfile: true,
    });
  };

  logout() {
    const cookie = new Cookies();
    cookie.remove('token');
  }

  render() {
    let redirect = null;
    if (this.props.User.message === 'Bad credentials') {
      redirect = <Redirect to="/error" />;
    }
    return (
      <div>
        {redirect}
        <nav className="clearfix homeNav">
          <div className="floatLeft ">
            <Link to="/">
              <button>Home</button>
            </Link>
          </div>
          <div className="floatLeft ">
            <button onClick={this.setProfile}>Profile</button>
          </div>
          <div className="floatLeft ">
            <Link to="/user/suggestions">
              <button>Who To Follow</button>
            </Link>
          </div>
          <div className="floatLeft ">
            <Link to="/logout">
              <button>Logout</button>
            </Link>
          </div>
        </nav>
        <Search handleSubmit={this.handleSubmit} />
        {this.state.username !== '' ? (
          <User username={this.state.username} />
        ) : null}
        {this.state.toProfile ? <ProfileUser User={this.props.User} /> : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    User: state.loginUser,
  };
};

export default connect(mapStateToProps, { refreshAuth })(Profile);
