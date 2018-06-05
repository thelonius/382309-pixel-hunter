
const switchScreen = (next) => {
  const mainCentral = document.querySelector(`main.central`);
  mainCentral.innerHTML = ``;
  mainCentral.appendChild(next);
};
export default switchScreen;
