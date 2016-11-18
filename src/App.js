import React, { Component } from 'react';
import logo from './logo.svg';
import Counters from './Counters';
import Footer from './Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <Counters
            counterArray={this.props.appState.counterArray}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onAddCounter={this.props.onAddCounter}
            onRemoveCounter={this.props.onRemoveCounter}
          />
          <Footer
            totalClicks={this.props.appState.totalClicks}
            step={this.props.appState.step}
            lastStep={this.props.appState.stateHistory.length}
            onUndo={this.props.onUndo}
            onRedo={this.props.onRedo}
          />
        </div>
      </div>
    );
  }
}

export default App;
