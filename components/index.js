import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CSS from '../assets/css/styles.scss';
import Title from './title';
import Options from './options';
import Results from './results';
import Timeline from './timeline';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="game-area">
        <Title />
        <Options />
        <Results />
        <Timeline />
        </div>
      </div>
    )
  }

}
let container = document.getElementById('app');
let component = <App />;

ReactDOM.render(component, container);
