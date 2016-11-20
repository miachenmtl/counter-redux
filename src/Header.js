import React from 'react';

export default function Header(props) {
  return (
    <div>
      +/- buttons have been pressed {props.totalClicks} times.
      <button
        onClick={props.onUndo}
        disabled={!props.step}
      >
        Undo
      </button>
      <button
        onClick={props.onRedo}
        disabled={props.step === props.lastStep - 1}
      >
        Redo
      </button>
    </div>
  );
}

Header.propTypes = {
  totalClicks: React.PropTypes.number.isRequired,
  step: React.PropTypes.number.isRequired,
  lastStep: React.PropTypes.number.isRequired,
  onUndo: React.PropTypes.func.isRequired,
  onRedo: React.PropTypes.func.isRequired
}
