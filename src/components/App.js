import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    term: "",
    images: [],
    errorMessage: null
  };
  onSearchSubmit = async term => {
    this.setState({ term: term });
    try {
      const response = await unsplash.get("/search/photos", {
        params: {
          query: term
        }
      });
      this.setState({ images: response.data.results, errorMessage: null });
    } catch (error) {
      this.setState({ errorMessage: error.message });
    }
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        <h2>{this.state.errorMessage}</h2>
      </div>
    );
  }
}

export default App;
