export function addNumberToArrayAt(array, number, index) {
  let firstSlice = array.slice(0, index);
  let secondSlice = array.slice(index + 1);
  return firstSlice.concat([array[index] + number], secondSlice);
}

export function recordState(stateHistory, subState, step) {
  let stateHistorySlice = stateHistory.slice(0, step);
  return stateHistorySlice.concat(subState);
}

export function removeElementAt(array, index) {
  let firstSlice = array.slice(0, index);
  let secondSlice = array.slice(index + 1);
  return firstSlice.concat(secondSlice);
}

export default (state, action) => {
  let newState = {};
  let subState = {};
  switch (action.type) {
    case 'INCREMENT':
      subState.counterArray = newState.counterArray = addNumberToArrayAt(state.counterArray, 1, action.index);
      subState.totalClicks = newState.totalClicks = state.totalClicks + 1;
      newState.step = state.step + 1;
      newState.stateHistory = recordState(state.stateHistory, subState, newState.step);
      console.log(newState.stateHistory.length);
      return newState;
    case 'DECREMENT':
      subState.counterArray = newState.counterArray = addNumberToArrayAt(state.counterArray, -1, action.index);
      subState.totalClicks = newState.totalClicks = state.totalClicks + 1;
      newState.step = state.step + 1;
      newState.stateHistory = recordState(state.stateHistory, subState, newState.step);
      return newState;
    case 'ADD_COUNTER':
      subState.counterArray = newState.counterArray = state.counterArray.concat(0);
      subState.totalClicks = newState.totalClicks = state.totalClicks;
      newState.step = state.step + 1;
      newState.stateHistory = recordState(state.stateHistory, subState, newState.step);
      return newState;
    case 'REMOVE_COUNTER':
      subState.counterArray = newState.counterArray = removeElementAt(state.counterArray, action.index);
      subState.totalClicks = newState.totalClicks = state.totalClicks;
      newState.step = state.step + 1;
      newState.stateHistory = recordState(state.stateHistory, subState, newState.step);
      return newState;
    case 'UNDO':
      newState.step = state.step - 1;
      newState.counterArray = state.stateHistory[newState.step].counterArray;
      newState.totalClicks = state.stateHistory[newState.step].totalClicks;
      newState.stateHistory = state.stateHistory;
      return newState;
    case 'REDO':
      newState.step = state.step + 1;
      newState.counterArray = state.stateHistory[newState.step].counterArray;
      newState.totalClicks = state.stateHistory[newState.step].totalClicks;
      newState.stateHistory = state.stateHistory;
      return newState;
    default:
      return state;
  }
}
