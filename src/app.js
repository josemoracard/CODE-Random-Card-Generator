/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const randomCard = Math.floor(Math.random() * 12);
  const randomSuit = Math.floor(Math.random() * 4);

  const card = document.querySelector(".card");

  card.innerHTML = randomCard;

  if (randomCard == 0) {
    card.innerHTML = "A";
  } else if (randomCard == 9) {
    card.innerHTML = "J";
  } else if (randomCard == 10) {
    card.innerHTML = "Q";
  } else if (randomCard == 11) {
    card.innerHTML = "K";
  }

  if (randomSuit == 0) {
    card.classList.add("clubs");
  } else if (randomSuit == 1) {
    card.classList.add("spades");
  } else if (randomSuit == 2) {
    card.classList.add("diamonds");
    card.classList.add("red");
  } else if (randomSuit == 3) {
    card.classList.add("hearts");
    card.classList.add("red");
  }
};
