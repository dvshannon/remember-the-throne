import React,  { Component } from 'react';
import CharacterCard from './components/CharacterCard';
import characters from './characters.json';
import Score from './components/Score';
import Container from './components/Container';

function shuffleCards(array) {
  for (let i = array.length -1; i>0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// initialize stateful component
class App extends Component {
  state = {
    characters,
    currentScore: 0,
    highScore: 0,
    clicked: []
  };
  
  // method for incrementing id on click
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      
    } else {
      this.handleReset();
    }
  };
  // method for incrementing id on click
  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightOrWrong: ""
    });
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightOrWrong: "King of the North!" });
    }
    this.handleShuffle();
  };
  // method for reset
  handleReset = () => {
    this.setState({
      currentScore: 0,
      highScore: this.state.highScore,
      rightOrWrong: "You know nothing Jon Snow! Try Again",
      clicked: []
     })
     this.handleShuffle();
  };
  // method for shuffle
  handleShuffle = () => {
    let shuffledCards = shuffleCards(characters);
    this.setState({ characters: shuffledCards });
  };

  // call render() because this is a stateful component
  render() {
    return (
      <Container>
        <div className="header">
          <Score>
            <div>Remember The Throne</div>
            <div className='sub-heading'>
              Click on images to earn points!
              <br/> 
              But don't click any more than once!
            </div>
            {/* displays the scores defined from state */}
            <div className="current-score">Current Score: {this.state.currentScore}</div>
            <div className="high-score">High Score: {this.state.highScore}</div>
            </Score>
        </div>
        <div className="wrapper">
          {/* .map filters through the array of characters to display the images with the help of CharacterCard */}
          {this.state.characters.map(character => (
            <CharacterCard
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              handleClick={this.handleClick}
              handleIncrement={this.handleIncrement}
              handleReset={this.handleReset}
              handleShuffle={this.handleShuffle}
            />
          ))}
        </div>
      </Container>
    );
  }
}

export default App;
