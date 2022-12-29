import "../styles/style.css";
import "../styles/variable.css";
import "./drinks";
import "./dom";
import { drinks } from "./drinks";
import { DOMSelectors } from "./dom";

const ez = drinks.filter((drink) => drink.hotorcold.includes("hot"));

const et = drinks.filter((drink) => drink.hotorcold.includes("cold"));
const er = drinks.filter((drink) => drink.healthy === true);

function printHot() {
  ez.forEach((drink) => {
    console.log(drink.name);
  });
}

function printCold() {
  et.forEach((drink) => {
    console.log(drink.name);
  });
}

function printHealthy() {
  er.forEach((drink) => {
    console.log(drink.name);
  });
}

drinks.forEach((drink) => {
  DOMSelectors.display.insertAdjacentHTML(
    "beforeend",
    `<div class= "display-card">
  <h1 class="name">${drink.name}</h1>
  <img class= "display-img" src="${drink.img}">
  </div>`
  );
});

const cardsContainer = document.querySelector(".display");

document.querySelector(".light").addEventListener("click", function () {
  document.body.classList.add("light");
  document.body.classList.remove("dark");
});

document.querySelector(".dark").addEventListener("click", function () {
  document.body.classList.add("dark");
  document.body.classList.remove("light");
});

document.querySelector(".hot").addEventListener("click", function () {
  console.clear();
  printHot();
  const ez1 = ez.map((drink) => {
    return '<div class="card">' + "<span>" + drink.name + "</span>" + "</div>";
  });
  cardsContainer.innerHTML = ez1.join("\n");
});

document.querySelector(".cold").addEventListener("click", function () {
  console.clear();
  printCold();
  const ez2 = et.map((drink) => {
    return '<div class="card">' + "<span>" + drink.name + "</span>" + "</div>";
  });
  cardsContainer.innerHTML = ez2.join("\n");
});

document.querySelector(".healthy").addEventListener("click", function () {
  console.clear();
  printHealthy();
  er.map((el) => {
    DOMSelectors.display.insertAdjacentHTML(
      "afterbegin",
      `<div class="items">
      <h4 class="name">${el.name}</h4>
      <img class="food-imgs" src="${el.img}"></img>
      <h5 class="price">${el.price}</h5>
      </div>`
    );
  });
});
