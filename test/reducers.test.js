import { expect } from 'chai'
import { addNumberToArrayAt, recordState, removeElementAt } from '../src/reducers'

describe("Add number to array at", () => {
  it("takes an array and returns a new array with the number added to the element at given index", () => {
    var inputArray = [1, 3, 4, 6, 4, 3];
    var result1 = addNumberToArrayAt(inputArray, 2, 1);
    var result2 = addNumberToArrayAt(inputArray, -1, 4);
    expect(result1).to.deep.equal([1, 5, 4, 6, 4, 3]);
    expect(result2).to.deep.equal([1, 3, 4, 6, 3, 3]);
  });
});

describe("Record State", () => {
  it("adds current state to state history, truncates to current step", () => {
    var newSubState = {
      counterArray: [2, 3, 4],
      totalClicks: 8
    };
    var stateHistory = [{
        counterArray: [0, 0, 0],
        totalClicks: 0
      },
      {
        counterArray: [0, 1, 0],
        totalClicks: 1
      },
      {
        counterArray: [0, 1, 1],
        totalClicks: 2
      }
    ];
    var expectedNewStateHistory1 = stateHistory.concat(newSubState);
    var expectedNewStateHistory2 = [{
        counterArray: [0, 0, 0],
        totalClicks: 0
      },
      {
        counterArray: [2, 3, 4],
        totalClicks: 8
      },
    ];
    var newStateHistory1 = recordState(stateHistory, newSubState, 3);
    var newStateHistory2 = recordState(stateHistory, newSubState, 1);
    expect(expectedNewStateHistory1).to.deep.equal(newStateHistory1);
    expect(expectedNewStateHistory2).to.deep.equal(newStateHistory2);
  });
});

describe("Remove element at", () => {
  it("returns an array with the element at specified index removed", () => {
      var array = [1, 2, 3, 4];
      var result = removeElementAt(array, 2);
      expect(result).to.deep.equal([1, 2, 4]);
  });
});
