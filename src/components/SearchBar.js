import React from "react";

class SearchBar extends React.Component {
  state = {
    searchTerm: ""
  };

  handleSearchTerm = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label>Search for Clips</label>
            <input type="text" value={this.state.searchTerm} onChange={this.handleSearchTerm}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
