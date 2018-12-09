import React, { Component } from 'react';
import './App.css';

import RadioSet from './components/RadioSet';

import songData from './data/tracks.json';

songData.forEach((song, i) => {
  song.id = i;
  // console.log(song.id);
});

class App extends Component {
  constructor(){
    super()

    this.state = {
      morning: songData.slice(0, songData.length / 2),
      evening: songData.slice(songData.length / 2, songData.length)
    }
  }

  sliceTrack = (index) => {
    console.log("Inside App.js the sliceTrack method");
    console.log(index);
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet tracks={this.state.morning}
            type="morning"
            slice = {this.sliceTrack} />
          <RadioSet tracks={this.state.evening}
            type="evening"
            slice = {this.sliceTrack}/>
        </main>
      </div>
    );
  }
}

export default App;
