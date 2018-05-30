const domElements = document.getElementsByTagName('template');
const mainCentral = document.querySelector('main.central');
let currentScreen = 0;

let arrowNav = document.createElement(`nav`);
const arrowNavStr = `<div class="arrows__wrap">
  <style>
    .arrows__wrap {
      position: absolute;
      top: 95px;
      left: 50%;
      margin-left: -56px;
    }
    .arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
    }
  </style>
  <button class="arrows__btn"><-</button>
  <button class="arrows__btn">-></button>
</div>`;
arrowNav.innerHTML = arrowNavStr;
console.log(arrowNav);

// const right = arrowNav.querySelector('arrows__btn');
const showScreen = (i) => {
  mainCentral.innerHTML = domElements[i].innerHTML;
}
const nextScreen = () => {
  currentScreen ++;
  showScreen(currentScreen);
}
const prevScreen = () => {
  currentScreen --;
  showScreen(currentScreen);
}
const switchScreen = (key) => {
  if (key.keyCode == '37') {
    currentScreen --;
    showScreen(currentScreen);
  } else if (key.keyCode == '39') {
      currentScreen ++;
      showScreen(currentScreen);
    }
  }
const right = arrowNav.querySelector('button:nth-child(3)');
const left = arrowNav.querySelector('button:nth-child(2)');

left.addEventListener('click', prevScreen, false);
right.addEventListener('click', nextScreen, false);
document.onkeydown = switchScreen;
showScreen(currentScreen);
document.body.appendChild(arrowNav);
