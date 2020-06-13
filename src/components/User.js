// IMPORTING REACT AND ITS COMPONENT
import React, { Component } from 'react';

// CONNECTING COMPONENT TO REDUX STORE
import { connect } from 'react-redux';

// IMPORTING ADD USER ACTION FROM ACTION FILE
import { addUser } from '../redux/actions/actions';

// IMPORTING LOADING COMPONENT TO SHOW IN WAIT TIME
import Loading from './Loading';

// USER COMPONENT TO SHOW DETAIL OF SEARCHED USER
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
    };
  }

  componentDidMount() {
    this.setState({
      username: this.props.username,
    });
    this.props.addUser(this.props.username);
  }

  componentDidUpdate() {
    if (this.props.username !== this.state.username) {
      this.props.addUser(this.props.username);
      this.setState({
        username: this.props.username,
      });
    }
  }

  render() {
    if (this.props.user === undefined) {
      return (
        <div>
          <Loading />{' '}
        </div>
      );
    } else if (this.props.notFound === 'Not Found') {
      return <div className="notFoundClass">User Not Found</div>;
    } else {
      const user = this.props.user;
      return (
        <div className="userDetails border">
          <img src={user.avatar_url} alt="user pic" />
          <ul>
            <li>Name: {user.name}</li>
            {user.location ? <li>Location: {user.location}</li> : null}
            {user.followers ? <li>Followers: {user.followers}</li> : null}
            {user.following ? <li>Following: {user.following}</li> : null}
            {user.bio ? <li>Bio:{user.bio}</li> : null}
            <li>GitHub URL: {user.html_url}</li>
            {user.blog ? <li>Blog: {user.blog}</li> : null}
            {user.email ? <li>Email: {user.email}</li> : null}
          </ul>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userDetails,
    notFound: state.notFound,
  };
};

export default connect(mapStateToProps, { addUser })(User);
