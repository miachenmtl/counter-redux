import React from 'react';

export default function Counters (props) {
  return (
    <div>
      <button onClick={props.onAddCounter}>Add Counter</button>
      {props.counterArray.map((counter, i) => {
        return (
          <p key={i}>
             This counter is set at {counter}.
            <button onClick={props.onIncrement.bind(null, i)}>
              +
            </button>
            <button onClick={props.onDecrement.bind(null, i)}>
              -
            </button>
            <button onClick={props.onRemoveCounter.bind(null, i)}>
              Remove Counter
            </button>
          </p>
        )
      })}
    </div>
  );
}

Counters.propTypes = {
  counterArray: React.PropTypes.array.isRequired,
  onIncrement: React.PropTypes.func.isRequired,
  onDecrement: React.PropTypes.func.isRequired
}
