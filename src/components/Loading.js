// IMPORTING REACT AND ITS COMPONENT
import React, { Component } from 'react';

// LOADING COMPONENT TO SHOW LOADING PAGE WHILE THE DETAILS IS FETCHED FROM STORE
class Loading extends Component {
  render() {
    return (
      <div>
        <h1 className="loadingClass">Loading......</h1>
      </div>
    );
  }
}

export default Loading;
