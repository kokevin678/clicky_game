import React, { Component } from "react";
import SnakeCard from "./components/SnakeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import snakes from "./snakes.json";

class App extends Component {
  // Setting this.state.snakes to the snakes.json array
  state = {
    snakes,
    clickedCard: [],
    status: ""
  };

  shuffleCard = id => {
    let clickedCard = this.state.clickedCard;

    this.setState({ snakes, clickedCard, status: " " });

    for (let i = snakes.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [snakes[i], snakes[j]] = [snakes[j], snakes[i]];
    }
  };

  // Map over this.state.snakes and render a SnakeCard component for each object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Snake</Title>
        {this.state.snakes.map(snake => (
          <SnakeCard
            shuffleCard={this.shuffleCard}
            id={snake.id}
            key={snake.id}
            image={snake.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
