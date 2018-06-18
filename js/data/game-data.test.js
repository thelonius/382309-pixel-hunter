import {assert, expect} from 'chai';
// import userAnswersArray from './userAnswersArray';
import {countGamePoints, pointsCount} from '../modules/countGamePoints';
const userLivesLeft = 2;
const nominalAnswersQuantity = 10;
// const userAnswersArrayShorter = [
//   {
//     isCorrect: false,
//     time: 33
//   },
//   {
//     isCorrect: true,
//     time: 81
//   },
//   {
//     isCorrect: false,
//     time: 10
//   },
//   {
//     isCorrect: true,
//     time: 28
//   },
//   {
//     isCorrect: false,
//     time: 105
//   }
// ];
const userAnswersArray = [
  {
    isCorrect: true,
    time: 40
  },
  {
    isCorrect: true,
    time: 40
  },
  {
    isCorrect: true,
    time: 40
  },
  {
    isCorrect: true,
    time: 40
  },
  {
    isCorrect: true,
    time: 40
  },
  {
    isCorrect: true,
    time: 40
  },
  {
    isCorrect: true,
    time: 40
  },
  {
    isCorrect: true,
    time: 40
  },
  {
    isCorrect: true,
    time: 40
  },
  {
    isCorrect: true,
    time: 40
  }
];
describe(`testing userAnswersArray`, () => {
  it(`if userAnswersArray is an array`, () => {
    expect(userAnswersArray).to.be.an(`array`);
  });
  it(`array should be out of ten objects maximum – currently : ${userAnswersArray.length}`, () => {
    assert(userAnswersArray.length <= 10 && !(userAnswersArray.length < 0), `array's length not more than 10`);
  });
  it(`check if all answers are present`, () => {
    assert(userAnswersArray.length === nominalAnswersQuantity, `answer quantity is : ${userAnswersArray.length}`);
  });
  // it(`return -1 if there's less than 10 answers user has done`, () => {
  //   assert(countGamePoints(userAnswersArrayShorter, userLivesLeft) < 1000, `countGamePoints returns : ${pointsCount}`);
  // });
  it(`mess around with cycling through array`, () => {
    assert(countGamePoints(userAnswersArray, userLivesLeft) === 1150, `countGamePoints returns : ${pointsCount}`);
  });
});

export default nominalAnswersQuantity;
