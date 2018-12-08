import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

class RadioSet extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      morningTracks: props.tracks.slice(0, props.tracks.length / 2),
      eveningTracks: props.tracks.slice(props.tracks.length / 2, props.tracks.length),
    }


  }

  moveUpSongCallback = (title) => {
    console.log("Inside the moveUpSongCallback");
    console.log(`${title}`);
  }

  render(){

    return(
      <div className="radio-set">
        <section className="radio-set--playlist-container">
          <Playlist
            side="Morning"
            moveUpSong = {this.moveUpSongCallback}
            tracks={this.state.morningTracks}
          />
          <Playlist
            side="Evening"
            moveUpSong = {this.moveUpSongCallback}
            tracks={this.state.eveningTracks}
          />
        </section>
      </div>
    )
  }
}



export default RadioSet;
