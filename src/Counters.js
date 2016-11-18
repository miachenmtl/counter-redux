import React from 'react';

export default class Counters extends React.Component {
  static propTypes = {
    counterArray: React.PropTypes.array.isRequired,
    onIncrement: React.PropTypes.func.isRequired,
    onDecrement: React.PropTypes.func.isRequired
  }
  render() {
    return (
      <div>
        <button onClick={this.props.onAddCounter}>Add Counter</button>
        {this.props.counterArray.map((counter, i) => {
          return (
            <p key={i}>
               This counter is set at {counter}.
              <button onClick={this.props.onIncrement.bind(null, i)}>
                +
              </button>
              <button onClick={this.props.onDecrement.bind(null, i)}>
                -
              </button>
              <button onClick={this.props.onRemoveCounter.bind(null, i)}>
                Remove Counter
              </button>
            </p>
          )
        })}
      </div>
    )
  }
}
