// IMPORTING REACT AND ITS COMPONENT
import React, { Component } from 'react';

// IMPORTING COOKIES FROM REACT COOKIES
import Cookies from 'universal-cookie';

// ERROR COMPONENT FOR SHOWING ERROR IF USER GOES TO INVALID URL
class Logout extends Component {
  componentDidMount() {
    const cookie = new Cookies();
    cookie.remove('token');
    this.props.history.push('/');
  }
  render() {
    return <div></div>;
  }
}

export default Logout;
