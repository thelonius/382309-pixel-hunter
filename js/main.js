import greeting from './modules/greeting';
import switchScreen from './modules/switchScreen';
// import countGamePoints from './modules/countGamePoints';
// import userAnswersArray from './data/game-data.test';

const prepareScreen = () => {
  const star = document.querySelector(`h1.intro__asterisk`);
  star.addEventListener(`click`, function () {
    switchScreen(greeting);
  }, false);
};
prepareScreen();
// countGamePoints(userAnswersArray, 2);
