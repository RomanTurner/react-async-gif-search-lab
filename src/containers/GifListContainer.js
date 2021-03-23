import React, { Component } from "react";
import GifList from '../components/GifList'
import GifSearch from "../components/GifSearch";

const apiKey = "GBEdv0qLZqydXCCMhNk201Ejl4G20smk";
export default class GifListContainer extends Component {
  state = {
      gifs: [],
  };

    filterJsonRes(jsonArr) {
        let newGifs = []
    for (let i = 0; i < 3; i++) {
      newGifs.push(jsonArr.data[i]);
    }
    this.setState({
        gifs: newGifs,
    });
  }
    
    getGifs = (input = "dolphins") => {
          fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${apiKey}&rating=g`)
            .then((res) => res.json())
            .then((res) => this.filterJsonRes(res))
            .catch((error) => console.error("ERROR: ", error));
    }
    
    
  componentDidMount() {
      this.getGifs();
  }

    render() {
      
        return (
        <div>
                <GifSearch getGifs={this.getGifs} />
                <GifList data={this.state.gifs} />
                
        </div>
      )
  }
}
