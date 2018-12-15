import React, { Component } from 'react';
import './App.css';
import RadioSet from './components/RadioSet';

import songData from './data/tracks.json';

songData.forEach((song, i) => {
  song.id = i;

});

class App extends Component {
    constructor(){
      super()

      this.state = {
        // morning: songData.slice(0, 15),
        morning: songData.slice(0, songData.length / 2),
        evening: songData.slice(songData.length / 2, songData.length)
      }
    }



  sliceTrack = (id) => {
    console.log("Inside App.js the sliceTrack method");
    console.log(id);
    let slice = [...this.state.morning.slice(0,id), ...this.state.morning.slice(id+1)]
    console.log(slice);
    this.setState({morning: slice}, () => {
        console.log(this.state.morning)})

  }

  render() {

    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <section className="radio-set--playlist-container">
            <RadioSet tracks={this.state.morning}
              type="morning"
              slice = {this.sliceTrack} />
            <RadioSet tracks={this.state.evening}
              type="evening"
              slice = {this.sliceTrack}/>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
