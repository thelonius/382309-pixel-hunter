import {assert} from 'chai';
import {addTimer} from '../modules/countGamePoints';
let gameTime = 100;
let initialSmallTime = -1;

describe(`testing GameTimerGenerator`, () => {
  it(`returns timer object`, () => {
    assert((addTimer(gameTime)).tick() === 99, `time is reduced by 1`);
  });
  it(`timer tells it's ended`, () => {
    assert((addTimer(initialSmallTime)).tick() === -1, `by the time is ended timer tells off`);
  });
});
