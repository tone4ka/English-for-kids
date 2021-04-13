import "./styles/style.scss";
import cardsArr from "./scripts/cardsArr";
import shuffle from "./scripts/shuffleArr";

const startBtn = document.querySelector(".start-btn");
const switcherButton = document.querySelector(".switcherButton");
const cardBox = document.querySelector(".cardBox");
const starBox = document.querySelector(".starBox");
let flag = false;
let category = "Main Page";
let mode = "train";
let attempt = 0;
let mistakes = 0;
let categoryCards;
let shuffleCards;
let categoryNumber;
let guessWord;
let numberWord;
let star;
let timerId1;
let timerId;
let word;
let audio;
let progressAudio;
let winnerImgBox;

// функции аудио
function sound() {
  const url = `./assets/cards/audio/${guessWord}.mp3`;
  function playAydio(url1) {
    audio = new Audio();
    audio.src = url1;
    audio.load();
    audio.play();
  }
  playAydio(url);
}
function progressSoundFunc() {
  const url1 = `./assets/cards/audio/${progressAudio}.mp3`;
  function playAydio1(url) {
    audio = new Audio();
    audio.src = url;
    audio.load();
    audio.play();
  }
  playAydio1(url1);
}

// icon
document.querySelector(".icon").setAttribute("href", "./favicon.ico");
// footer
document.querySelector(".gitLink").setAttribute("href", "//github.com/tone4ka");
document
  .querySelector(".logiLink")
  .setAttribute("href", "https://rs.school/js/");
document.querySelector(".logo").src = "./assets/cards/img/rs_school_js.svg";

// MENU BTN
document.querySelector(".menu_btn").addEventListener("click", () => {
  if (flag === false) {
    document.querySelector(".menu_btn").classList.toggle("activeJS");
    document.querySelector(".nav").style.left = "0px";
    document.querySelectorAll(".navIcon").forEach((element) => {
      const el = element;
      el.style.animation = "rotateImg 1.5s ease 1s";
    });
    flag = true;
  } else {
    document.querySelector(".menu_btn").classList.toggle("activeJS");
    document.querySelector(".nav").style.left = "-100%";
    flag = false;
    document.querySelectorAll(".navIcon").forEach((element) => {
      const el1 = element;
      el1.style.animation = "none";
    });
  }
});

document.querySelector(".nav").addEventListener("click", () => {
  document.querySelector(".menu_btn").classList.toggle("activeJS");
  document.querySelector(".nav").style.left = "-100%";
  document.querySelectorAll(".navIcon").forEach((element) => {
    const el3 = element;
    el3.style.animation = "none";
  });
  flag = false;
});

// NAVIGATION LIST ICONS ADD
let j = 0;
document.querySelectorAll(".li").forEach((element) => {
  const imgLi = document.createElement("img");
  imgLi.classList.add("navIcon");
  element.appendChild(imgLi);
  imgLi.src = cardsArr[10][j].image;
  j += 1;
});

// NAVIGATION
document.querySelectorAll(".menu_list").forEach((element) => {
  element.addEventListener("click", (event) => {
    let targetNav = event.target;

    if (!targetNav.textContent) {
      targetNav = targetNav.parentElement.parentElement;
    }
    category = targetNav.textContent;
    cardBox.innerHTML = "";
    shuffle();
    starBox.innerHTML = "";
    createCards();
  });
});

function navCard() {
  if (category === "Main Page") {
    categoryCards.forEach((element) => {
      element.addEventListener("click", (event) => {
        let eventNavCard = event.target;
        if (eventNavCard.classList.contains("imgFront")) {
          eventNavCard = eventNavCard.parentElement;
        }
        category = eventNavCard.textContent;
        cardBox.innerHTML = "";
        shuffle();
        createCards();
      });
    });
  }
}

// SWITCHER
switcherButton.addEventListener("click", () => {
  starBox.innerHTML = "";
  startBtn.innerHTML = "Start game";
  switcherButton.classList.toggle("toggled");
  if (mode === "train") {
    mode = "play";
  } else {
    mode = "train";
  }
  // for startGame btn
  if (category === "Main Page") {
    startBtn.style.display = "none";
  } else if (mode === "train") {
    startBtn.style.display = "none";
  } else {
    startBtn.style.display = "block";
  }
  // for styles
  document.querySelector(".ul").classList.toggle("dimmedJS");
  document.querySelectorAll(".cardFront").forEach((element) => {
    element.classList.toggle("dimmedJS");
    element.classList.toggle("playCard");
  });
  document.querySelectorAll(".cardBack").forEach((element) => {
    element.classList.toggle("dimmedJS");
  });
  categoryCards.forEach((element) => {
    element.classList.toggle("dimmedJS");
  });
  // add/remove listener for cards and for startBtn
  if (mode === "train") {
    cardBox.addEventListener("click", rotateFunc);
    startBtn.removeEventListener("click", guessWordFunc);
    // ЕСЛИ переключаем переключатель во время игры:
    startBtn.removeEventListener("click", sound);
    document.querySelectorAll(".cardFront").forEach((element) => {
      // возвращаем угаданные картинки
      if (element.classList.contains("opacityCard")) {
        element.classList.remove("opacityCard");
        element.classList.remove("playCard");
      }
    });
    cardBox.removeEventListener("click", getChosenWord);
    // сбрасываем счетчики
    attempt = 0;
    mistakes = 0;
  } else if (mode === "play") {
    cardBox.removeEventListener("click", rotateFunc);
    startBtn.addEventListener("click", guessWordFunc);
    // ЕСЛИ либо карточки не успели перевернуться:
    document.querySelectorAll(".cardFront").forEach((element) => {
      if (element.classList.contains("rotatedFront")) {
        element.classList.remove("rotatedFront");
      }
    });
    document.querySelectorAll(".cardBack").forEach((element) => {
      if (element.classList.contains("rotatedBack")) {
        element.classList.remove("rotatedBack");
      }
    });
  }
});

// ROTATE
function rotateFunc(event) {
  const { target } = event; // где был клик?
  if (target.classList === "cardBox") return; // тогда не интересует
  if (!target.classList.contains("rotate")) {
    guessWord = target.parentElement.textContent;
    sound();
    return;
  }
  const parent = target.parentElement.parentElement.parentElement;
  const front = parent.firstChild;
  const back = parent.lastChild;
  front.classList.add("rotatedFront");
  back.classList.add("rotatedBack");
  back.addEventListener("mouseleave", (event1) => {
    const target1 = event1.target;
    if (!target1.classList.contains("cardBack", "rotatedBack")) return;
    front.classList.remove("rotatedFront");
    back.classList.remove("rotatedBack");
  });
}

// CREATE CARDS
function createCards() {
  // сбрасываем счетчики
  attempt = 0;
  mistakes = 0;
  startBtn.innerHTML = "Start game";
  shuffleCards = shuffle();
  categoryNumber = cardsArr[0].indexOf(category) + 1;
  for (let i = 0; i < 8; i += 1) {
    const numberCard = shuffleCards[i];
    const card = document.createElement("div");
    const cardFront = document.createElement("div");
    const cardBack = document.createElement("div");
    const imgFront = document.createElement("img");
    const imgBack = document.createElement("img");
    const pFront = document.createElement("p");
    const pBack = document.createElement("p");
    const rotate = document.createElement("img");
    const bottomOfFrontCard = document.createElement("div");
    // add class
    card.classList.add("cardJS");
    cardBack.classList.add("cardBack");
    if (mode === "play") cardBack.classList.add("dimmedJS");
    rotate.classList.add("rotate");
    bottomOfFrontCard.classList.add("bottomOfFrontCard");
    imgFront.classList.add("imgFront");
    cardBox.appendChild(card);
    card.appendChild(cardFront);
    cardFront.appendChild(imgFront);

    if (category !== "Main Page") {
      // for words cards
      cardFront.appendChild(bottomOfFrontCard);
      bottomOfFrontCard.appendChild(pFront);
      card.appendChild(cardBack);
      cardBack.appendChild(imgBack);
      cardBack.appendChild(pBack);
      cardFront.classList.add(
        "cardFront",
        `${cardsArr[categoryNumber][numberCard].word}`
      );
      bottomOfFrontCard.appendChild(rotate);
      rotate.src = "./assets/cards/img/rotate.svg";
      if (mode === "play") {
        startBtn.removeEventListener("click", sound);
        startBtn.addEventListener("click", guessWordFunc);
        cardFront.classList.add("dimmedJS", "playCard"); // add class for play mode
        cardBox.removeEventListener("click", rotateFunc);
      } else if (mode === "train") {
        cardBox.removeEventListener("click", getChosenWord);
        cardBox.addEventListener("click", rotateFunc);
      }

      imgFront.src = cardsArr[categoryNumber][numberCard].image;
      imgBack.src = cardsArr[categoryNumber][numberCard].image;
      pFront.innerHTML = cardsArr[categoryNumber][numberCard].word;
      pBack.innerHTML = cardsArr[categoryNumber][numberCard].translation;
    } else {
      // for category cards
      cardFront.classList.add("categoryCard");
      if (mode === "play") cardFront.classList.add("dimmedJS"); // add class for play mode
      cardFront.appendChild(pFront);
      imgFront.src = cardsArr[1][i].image;
      imgBack.src = cardsArr[1][i].image;
      pFront.innerHTML = cardsArr[1][i].word;
      pBack.innerHTML = cardsArr[1][i].translation;
      categoryCards = document.querySelectorAll(".categoryCard");
      navCard();
    }
  }
  // for startBtn
  if (category !== "Main Page" && mode === "train") {
    startBtn.style.display = "none";
  } else if (category !== "Main Page" && mode === "play") {
    startBtn.style.display = "block";
  } else {
    startBtn.style.display = "none";
  }
}
createCards();

// PLLAY MODE FUNCTIONS

// функция очиски кардбокс
function clearCardBox() {
  cardBox.innerHTML = "";
}

// загадываем новое слово из массива
function newWord() {
  numberWord = shuffleCards[attempt];
  guessWord = cardsArr[categoryNumber][numberWord].word;
}

// функция определения проигрыша\победы
function winOrLoseFunc() {
  cardBox.removeEventListener("click", getChosenWord);
  category = "Main Page";
  startBtn.innerHTML = "Start game";
  startBtn.style.display = "none";
  clearCardBox();
  starBox.innerHTML = "";
  winnerImgBox = document.createElement("div");
  winnerImgBox.classList.add("winnerImgBox");
  const textOfEndGame = document.createElement("p");
  textOfEndGame.classList.add("textOfEndGame");
  const imgOfEndGame = document.createElement("img");
  imgOfEndGame.classList.add("imgOfEndGame");
  cardBox.appendChild(winnerImgBox);
  winnerImgBox.appendChild(textOfEndGame);
  winnerImgBox.appendChild(imgOfEndGame);
  if (mistakes === 0) {
    textOfEndGame.innerHTML = "YOU WIN!";
    imgOfEndGame.src = "./assets/cards/img/success.jpg";
    progressAudio = "success";
  } else {
    textOfEndGame.innerHTML = `${mistakes} errors`;
    imgOfEndGame.src = "./assets/cards/img/failure.jpg";
    progressAudio = "failure";
  }
  attempt = 0;
  mistakes = 0;
}

// следим за процессом игры, выбираем новые слова и т.д.
function getChosenWord(event) {
  let { target } = event;
  const targClass = target.classList;
  const parentClass = target.parentElement.classList;
  if (targClass.contains("playCard") || parentClass.contains("playCard")) {
    if (targClass.contains("playCard")) {
      word = targClass[1];
    } else {
      word = parentClass[1];
      target = target.parentElement;
    }
    // определяем правильность клика(если верно-закрашиваем карту, удаляем класс участия в игре)
    if (word === guessWord) {
      progressAudio = "correct";
      progressSoundFunc();
      // add star-win
      star = document.createElement("img");
      star.classList.add("star");
      star.src = "./assets/cards/img/star-win.svg";
      starBox.appendChild(star);
      // remove card from game
      target.classList.remove("playCard");
      target.classList.add("opacityCard");
      attempt += 1;
      // заканчиваем игру, если все карточки закрыты
      if (attempt > 7) {
        winOrLoseFunc();
        progressSoundFunc();
        startBtn.removeEventListener("click", sound);
        timerId1 = setTimeout(clearCardBox, 4000);
        timerId = setTimeout(createCards, 4100);
        return;
      }
      newWord();
      setTimeout(sound, 2000);
    } else {
      progressAudio = "error";
      progressSoundFunc();
      mistakes += 1;
      star = document.createElement("img");
      star.classList.add("star");
      star.src = "./assets/cards/img/star.svg";
      starBox.appendChild(star);
    }
  }
}

// создаем массив слов категории в случайном порядке, вешаем обработчик кликов на карты
function guessWordFunc() {
  if (timerId) {
    clearTimeout(timerId1);
    clearTimeout(timerId);
  }
  shuffleCards = shuffle();
  newWord();
  sound();
  cardBox.addEventListener("click", getChosenWord);
  startBtn.innerHTML = "repeat";
  startBtn.removeEventListener("click", guessWordFunc);
  startBtn.addEventListener("click", sound);
}
