import React from "react";
import SearchBar from "./SearchBar";
import youtubeAPI from "../apis/youtube";
import ClipsList from "./ClipsList"

class App extends React.Component {
  state = { clips: [] };

  onSearchTermSubmit = async (searchTerm) => {
    const response = await youtubeAPI.get("/search", {
      params: {
        q: searchTerm
      }
    });

    this.setState({ clips: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
        <p>There are {this.state.clips.length} videos</p>
        <ClipsList clips={this.state.clips}/>
      </div>
    );
  }
}

export default App;
