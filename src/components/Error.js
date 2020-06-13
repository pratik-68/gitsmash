// IMPORTING REACT AND ITS COMPONENT
import React, { Component } from 'react';

// IMPORTING LINK FROM REACT ROUTER DOM
import { Link } from 'react-router-dom';

// ERROR COMPONENT FOR SHOWING ERROR IF USER GOES TO INVALID URL
class Error extends Component {
  render() {
    return (
      <div>
        <Link to="/" className="errorLink">
          Home
        </Link>
        <h1 className="errorClass">Error 404 : Invalid Link</h1>
      </div>
    );
  }
}

export default Error;
