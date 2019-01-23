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

  componentDidMount() {
      this.onSearchTermSubmit("javascript pro");
  }

  onSearchTermSubmit = async (searchTerm) => {
    const response = await youtubeAPI.get("/search", {
      params: {
        q: searchTerm
      }
    });

    this.setState({ 
      clips: response.data.items,
      selectedClip: response.data.items[0]
    });
  };

  onClipSelect = (clip) => {
    this.setState({ selectedClip: clip });
  }


  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <SingleClipDetail clip={this.state.selectedClip} />
            </div>
            <div className="five wide column">
              <ClipsList clips={this.state.clips} onClipSelect={this.onClipSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
