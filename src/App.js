import React, { Component } from "react";
import SnakeCard from "./components/SnakeCard";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import Title from "./components/Title";
import snakes from "./snakes.json";

class App extends Component {
  // Setting this.state.snakes to the snakes.json array
  state = {
    snakes,
    clickedCard: [],
    status: "",
    score: 0,
    maxScore: 12
  };

  shuffleCard = id => {
    let clickedCard = this.state.clickedCard;

    if (clickedCard.includes(id)) {
      this.setState({
        clickedCard: [],
        score: clickedCard.length,
        status:
          "Game Over! You already guess that ball python. Click to play again!"
      });
      return;
    } else {
      clickedCard.push(id);

      if (clickedCard.length === 12) {
        this.setState({
          score: 12,
          status:
            "You Won! You guessed all the ball python! Click to play again!",
          clickedCard: []
        });
        console.log("Win");
        return;
      }

      this.setState({
        snakes,
        clickedCard,
        score: clickedCard.length,
        status: ""
      });

      for (let i = snakes.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [snakes[i], snakes[j]] = [snakes[j], snakes[i]];
      }
    }
  };

  // Map over this.state.snakes and render a SnakeCard component for each object
  render() {
    return (
      <div>
        <div>
          <Title>Clicky Snake</Title>

          <Score
            total={this.state.score}
            maxScore={12}
            status={this.state.status}
          />
        </div>
        <Wrapper>
          {this.state.snakes.map(snake => (
            <div>
              <SnakeCard
                shuffleCard={this.shuffleCard}
                id={snake.id}
                key={snake.id}
                image={snake.image}
              />
            </div>
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
