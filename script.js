"use strict";
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const card = document.querySelectorAll(".card__box");

const race = document.querySelectorAll(".card__box-subtitle");
const raceArr = Array.from(race);

let dbNr = document.querySelectorAll(".card__box-title--db");
const dbNrArr = Array.from(dbNr);

let i = 0;

// BUTTON CLICKED FUNCTION

btnRight.addEventListener("click", function () {
  card[i].classList.remove("active");
  i++;
  if (i > card.length - 1) i = 0;
  card[i].classList.add("active");
  setColors();

  setNumber();
});

btnLeft.addEventListener("click", function () {
  card[i].classList.remove("active");
  i--;
  if (i < 0) i = card.length - 1;
  card[i].classList.add("active");
  ///////

  setColors();

  setNumber();
  //
});

// SETTING CARD COLORS BASED ON CONTENT
const setColors = function () {
  if (raceArr[i].textContent == "Sayian") {
    card[i].style.background = "var(--gradient-red)";
    btnLeft.style.background = "var(--gradient-red)";
    btnRight.style.background = "var(--gradient-red)";
  } else if (raceArr[i].textContent == "Human") {
    card[i].style.background = "var(--gradient-blue)";
    btnLeft.style.background = "var(--gradient-blue)";
    btnRight.style.background = "var(--gradient-blue)";
  } else if (raceArr[i].textContent == "Namekian") {
    card[i].style.background = "var(--gradient-green)";
    btnLeft.style.background = "var(--gradient-green)";
    btnRight.style.background = "var(--gradient-green)";
  }
};

setColors();

// SETTING DRAGON BALL NUMBER BASED ON CARD NR
const setNumber = function () {
  dbNr[i].setAttribute("src", `/img/db/db${i + 1}.png`);
  dbNr.innerHTML = `123`;
};

setNumber();

///////// ARROW KEYS FUNCTION
document.addEventListener("keydown", function (e) {
  if (e.code === "ArrowRight") {
    card[i].classList.remove("active");
    i++;
    if (i > card.length - 1) i = 0;
    card[i].classList.add("active");
    setColors();

    setNumber();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.code === "ArrowLeft") {
    console.log(e.code);
    card[i].classList.remove("active");
    i--;
    if (i < 0) i = card.length - 1;
    card[i].classList.add("active");
    ///////

    setColors();

    setNumber();
    //
  }
});

// right = 39
// down = 40
