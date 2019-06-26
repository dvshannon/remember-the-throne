import React,  { Component } from 'react';
import Game from './view/Game';
import CharacterCard from './components/CharacterCard';
import characters from './characters.json';
import Score from './components/Score';

class App extends Component {
  state = {
    characters
  };

  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;
