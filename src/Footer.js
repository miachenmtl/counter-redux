import React from 'react';

export default class Footer extends React.Component {
  static propTypes ={
    totalClicks: React.PropTypes.number.isRequired,
    step: React.PropTypes.number.isRequired,
    lastStep: React.PropTypes.number.isRequired,
    onUndo: React.PropTypes.func.isRequired,
    onRedo: React.PropTypes.func.isRequired
  }
  render() {
    return (
      <div>
        +/- buttons have been pressed {this.props.totalClicks} times.
        <button
          onClick={this.props.onUndo}
          disabled={!this.props.step}
        >
          Undo
        </button>
        <button
          onClick={this.props.onRedo}
          disabled={this.props.step === this.props.lastStep - 1}
        >
          Redo
        </button>
      </div>
    )
  }
}
