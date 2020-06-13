// IMPORTING REACT AND ITS COMPONENT
import React, { Component } from 'react';

// SEARCH COMPONENT FOR SHOWING SEARCHBAR FOR GIT USER
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      error: null,
    };
  }

  // HANDLE CHANGE FUNCTION WILL MAINTAIN THE STATE CHANGE
  handleChange = (e) => {
    this.setState({ username: e.target.value });
  };

  // HANDLE SUBMIT FUNCTION WILL PASS THE USERNAME TO ITS PARENT COMPONENT
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.username !== '') {
      this.setState({ error: null });
      this.props.handleSubmit(this.state.username);
      this.setState({ username: '' });
    } else this.setState({ error: 'Empty Field' });
  };

  render() {
    return (
      <div className="usernameField">
        <form onSubmit={this.handleSubmit}>
          <h1>Enter Github Username : </h1>
          <input
            className="searchBar"
            value={this.state.username}
            type="text"
            placeholder="Enter Username"
            onChange={this.handleChange}
          />
          <button className="searchBarButton">Submit</button>
          <span className="emptyError">{this.state.error}</span>
        </form>
      </div>
    );
  }
}

export default Search;
