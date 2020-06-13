// IMPORTING REACT AND ITS COMPONENT
import React, { Component } from 'react';

// IMPORTING COOKIES FROM REACT COOKIES
import Cookies from 'universal-cookie';
import { allUser, deleteUser } from '../redux/actions/actions';
import { connect } from 'react-redux';

// IMPORTING LINK FROM REACT ROUTER DOM
import { Link } from 'react-router-dom';

// SUGGESTION COMPONENT TO SHOW THE LOGIN USER WHO TO FOLLOW PAGE
class Suggestion extends Component {
  state = {
    username: '',
  };

  componentDidMount() {
    const cookie = new Cookies();
    const token = cookie.get('token');
    if (token) {
      this.props.allUser();
    } else {
      this.props.history.push('/');
    }
  }

  handleClick = (e) => {
    this.props.deleteUser(parseInt(e.target.id));
  };

  render() {
    return (
      <div>
        <nav className="clearfix homeNav">
          <div className="floatLeft ">
            <Link to="/">
              <button>Home</button>
            </Link>
          </div>
          <div className="floatLeft ">
            <Link to={this.props.User.login}>
              <button>Profile</button>
            </Link>
          </div>
          <div className="floatLeft ">
            <Link to="/user/suggestions">
              <button>Who To Follow</button>
            </Link>
          </div>
          <div className="floatLeft ">
            <Link to="/">
              <button onClick={this.logout}>Logout</button>
            </Link>
          </div>
        </nav>
        {this.props.users.map((person) => (
          <div className="suggestionBox border" key={person.id}>
            <p>
              <img src={person.avatar_url} alt="person_url" />
            </p>
            <p>
              <a href={person.login}>{person.login}</a>
            </p>
            <p>{person.bio}</p>
            <button id={person.id} onClick={this.handleClick}>
              DELETE
            </button>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    User: state.loginUser,
    users: state.allUser.slice(0, 3),
  };
};

export default connect(mapStateToProps, { allUser, deleteUser })(Suggestion);
