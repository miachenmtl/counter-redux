function deepCopy(object) {
  return JSON.parse(JSON.stringify(object));
}

function recordState(state) {
  let newState = deepCopy(state);
  newState.step++;
  newState.stateHistory[newState.step] = {
    counterArray: newState.counterArray,
    totalClicks: newState.totalClicks
  };
  newState.stateHistory.length = newState.step + 1;
  return newState;
}

export default (state, action) => {
  let newState = deepCopy(state);
  switch (action.type) {
    case 'INCREMENT':
      newState.counterArray[action.index]++;
      newState.totalClicks++;
      newState = recordState(newState);
      return newState;
    case 'DECREMENT':
      newState.counterArray[action.index]--;
      newState.totalClicks++;
      newState = recordState(newState);
      return newState;
    case 'ADD_COUNTER':
      newState.counterArray.push(0);
      newState = recordState(newState);
      return newState;
    case 'REMOVE_COUNTER':
      newState.counterArray.splice(action.index, 1);
      newState = recordState(newState);
      return newState;
    case 'UNDO':
      newState.step--;
      newState.counterArray = newState.stateHistory[newState.step].counterArray;
      newState.totalClicks = newState.stateHistory[newState.step].totalClicks;
      return newState;
    case 'REDO':
      newState.step++;
      newState.counterArray = newState.stateHistory[newState.step].counterArray;
      newState.totalClicks = newState.stateHistory[newState.step].totalClicks;
      return newState;
    default:
      return state;
  }
}
