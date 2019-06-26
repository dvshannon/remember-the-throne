import React,  { Component } from 'react';
import CharacterCard from './components/CharacterCard';
import characters from './characters.json';
import Score from './components/Score';
import Container from './components/Container';

class App extends Component {
  state = {
    characters
  };

  incrementCard = id => {
    const characters = this.state.characters.filter(characters => characters.id !== id);

    this.setState({ characters });
  }
  render() {
    return (
      <Container>
        <div className="header">
          <Score>
            <div>Remember The Throne</div>
            <div className='sub-heading'>Click on images to earn points! But don't click any more than once</div>
            </Score>
        </div>
        <div className="wrapper">
        {this.state.characters.map(friend => (
          <CharacterCard
            removeFriend={this.incrementCard}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </div>
      </Container>
    );
  }
}

export default App;
