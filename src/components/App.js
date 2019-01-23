import React from "react";
import SearchBar from "./SearchBar";
import youtubeAPI from "../apis/youtube";
import ClipsList from "./ClipsList";
import SingleClipDetail from "./SingleClipDetail";

class App extends React.Component {
  state = { 
    clips: [],
    selectedClip: null 
  };

  onSearchTermSubmit = async (searchTerm) => {
    const response = await youtubeAPI.get("/search", {
      params: {
        q: searchTerm
      }
    });

    this.setState({ clips: response.data.items });
  };

  onClipSelect = (clip) => {
    this.setState({ selectedClip: clip });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
        <SingleClipDetail clip={this.state.selectedClip} />
        <p>There are {this.state.clips.length} videos</p>
        <ClipsList clips={this.state.clips} onClipSelect={this.onClipSelect} />
      </div>
    );
  }
}

export default App;
