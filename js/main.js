import greeting from './modules/greeting';
import switchScreen from './modules/switchScreen';
const prepareScreen = () => {
  const star = document.querySelector(`h1.intro__asterisk`);
  star.addEventListener(`click`, function () {
    switchScreen(greeting);
  }, false);
};
prepareScreen();
