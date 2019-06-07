import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CSS from '../assets/css/styles.scss';
import Title from './title';
import Options from './options';
import Results from './results';
import Timeline from './timeline';

function getWinner(playerChoice, computerChoice) {
  const rules = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock',
  }

  if (playerChoice === computerChoice) return 'draws';
  if (computerChoice === rules[playerChoice]) return 'wins';
  else return 'losses';
}

function getRandomChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  
  return choices[Math.floor(Math.random() * choices.length)];
}

const initialState = {
  wins: 0,
  losses: 0,
  draws: 0,
  currentGameResult: null,
  message: "",
  timeline: [],
  timelineResult: [],
  choiceResult: "",
  choice: "",
}

class App extends Component {
  constructor(){
    super();
    this.state = initialState;
    this.onClickChoose = this.onClickChoose.bind(this);
  }

  onClickChoose(choice) {
    const result = getWinner(choice, getRandomChoice());

    this.setState((prevState) => {
      if (result === 'wins') return {
        wins: prevState[result] + 1,
        message: "nice"
      }
      else if (result === 'draws') return {
        draws: prevState[result] + 1,
        message: "tie"
      }
      else if (result === 'losses') return {
        losses: prevState[result] + 1,
        message: "loser"
      }
    });

    this.setState(prevState => ({
      currentGameResult: result,
      timeline: [...prevState.timeline, choice],
      choice: choice,
      choiceResult: choice + this.state.currentGameResult,
      timelineResult: [...prevState.timelineResult, this.state.choiceResult],
    }))
  }

  render() {
    return (
      <div className="app">
        <div className="game-area">
        <Title />
        <Options onClickChoose={this.onClickChoose}/>
        <Results wins={this.state.wins} losses={this.state.losses} />
        <div>
                {this.state.message}
        </div>
        <Timeline timelineResult={this.state.timelineResult} currentGameResult={this.state.currentGameResult}/>
        </div>
      </div>
    )
  }

}
let container = document.getElementById('app');
let component = <App />;

ReactDOM.render(component, container);
