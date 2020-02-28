# Clicky Game

Memory clicky game. In this game you will be memorizing the morph of ball phython and win by only click each different morph once. Each ball python is a card generated from the snakes.json file. The card are wrapped in a wrapper which shuffles each time you click a card.

## Built With

- [React.js](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)

## Installation Guide

First navigate to your terminal and clone the repository(https://github.com/kokevin678/clicky_game.git). Then install the dependencies in terminal using by typing in "npm install". Run npm start in terminal using to run React.

## Demo

[Demo](/public/assets/img/clickyGame.gif)

## Code Snippets

Track the card clicked, update score, and shuffle the cards.

```js
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
```

Wrong guess, that card has always been clicked.

```js
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
```

Clicked all 12 cards without any repeat, Game win.

```js
if (clickedCard.length === 12) {
  this.setState({
    score: 12,
    status: "You Won! You guessed all the ball python! Click to play again!",
    clickedCard: []
  });
  console.log("Win");
  return;
}
```

## Deployed Link

- [See Live Site](https://kokevin678.github.io/clicky_game/)

## Authors

- **Chengyu Kevin Ko**

* [Link to Portfolio Site](#)
* [Link to Github](https://github.com/kokevin678)
* [Link to LinkedIn](https://www.linkedin.com/)

## License

This project is licensed under the MIT License

## Acknowledgments

- Images taken from [World of Ball Python](http://www.worldofballpythons.com/morphs/)
