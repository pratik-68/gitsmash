// IMPORTING REACT AND ITS COMPONENT
import React, { Component } from 'react';

// PROFILE COMPONENT FOR SHOWING AUTHORISED USER PROFILE PAGE
class ProfileUser extends Component {
  render() {
    const user = this.props.User;
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

export default ProfileUser;
