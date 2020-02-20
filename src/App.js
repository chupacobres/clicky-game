import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import monkeys from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.pups to the cards json array
  state = {
    monkeys,
    clickedMonkeyIds: [],
    score: 0,
    goal: 8,
    status: ""
  };

  //shuffle the monkey cards when clicked
  shuffleScoreCard = id => {
    let clickedMonkeyIds = this.state.clickedMonkeyIds;

    if (clickedMonkeyIds.includes(id)) {
      this.setState({ clickedMonkeyIds: [], score: 0, status: "You clicked that monkey already! Game over!, Try again" });
      return;
    }
    else {
      clickedMonkeyIds.push(id)

      if (clickedMonkeyIds.length === 8) {
        this.setState({ score: 8, status: "Good monkey! You won!", clickedMonkeyIds: [] });
        // console.log('Game won');
        return;
      }

      this.setState({ monkeys, clickedMonkeyIds, score: clickedMonkeyIds.length, status: " " });
      //Suffle the array
      for (let i = monkeys.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [monkeys[i], monkeys[j]] = [monkeys[j], monkeys[i]];
      }
    }
  }

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Click that monkey</h1>
          <p className="App-intro">
            Try not to click the same monkey twice!
          </p>
        </header>
        <Score total={this.state.score}
          goal={8}
          status={this.state.status}
        />
        <Wrapper>
          {this.state.monkeys.map(monkey => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={monkey.id}
              key={monkey.id}
              image={monkey.image}
            />
          ))}
        </Wrapper>
        <footer>
          <p>Silly Code (c). My Github account:<a href="https://github.com/chupacobres/clicky-game" target="_blank" rel="noopener noreferrer"> here</a>.</p>
        </footer>
      </div>
    );
  }
}

export default App;
