// import userAnswersArray from '../data/userAnswersArray';
const nominalAnswersQuantity = 10;
const userLivesLeft = 3;
const correctAnswer = 100;
const slowThreshold = 60;
const slowAnswerPoints = -50;
const fastThreshhold = 30;
const fastAnswerPoints = 50;
const lifeLeftPoints = 50;
export let pointsCount = 0;

export const addTimer = (gameTime) => {
  const timer = {
    timeNum: gameTime,
    tick: () => {
      if (timer.timeNum < 0) {
        return -1;
      } else {
        timer.timeNum--;
        return timer.timeNum;
      }
    }
  };
  return timer;
};

export const countGamePoints = (array) => {
  if (array.length < nominalAnswersQuantity) {
    pointsCount = -1;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i].isCorrect === false) {
        continue;
      }
      if (array[i].isCorrect && array[i].time < fastThreshhold) {
        pointsCount += correctAnswer + fastAnswerPoints;
      } else if (array[i].isCorrect && array[i].time > slowThreshold) {
        pointsCount += correctAnswer + slowAnswerPoints;
      } else if (array[i].isCorrect) {
        pointsCount += correctAnswer;
      }
    }
  }
  pointsCount += userLivesLeft * lifeLeftPoints;
  return pointsCount;
};
