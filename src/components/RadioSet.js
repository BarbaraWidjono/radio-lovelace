import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

class RadioSet extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      trackSet: props.tracks,
      trackType: props.type,
    }
  }


  moveUpSongCallback = (id) => {
    console.log("Inside the moveUpSongCallback");
    this.props.slice(id);
    // console.log(`${track.state.title}`);
    // console.log(`${track.state.index}`);
    // console.log(track);
    // console.log(`${track}`);
    // console.log(this.state.morningTracks);
  }

  render(){

    let side = "";
    this.state.trackType === "morning"? side = "Morning" : side = "Evening";

    return(
      <div className="radio-set">
        <Playlist
          side={side}
          moveUpSong = {this.moveUpSongCallback}
          tracks={this.state.trackSet}
        />
      </div>
    )
  }
}



export default RadioSet;
