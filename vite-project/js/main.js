import "../styles/style.css";
import "../styles/variable.css";
import "./drinks";
import "./dom";
import { drinks } from "./drinks";
import { DOMSelectors } from "./dom";
const ez = drinks.filter((drink) => drink.hotorcold.includes("hot"));

function printHot() {
  ez.forEach((drink) => {
    console.log(drink.name);
  });
}

document.querySelector("#app").innerHTML = `
    <h1>Bev</h1> 
    <div class="buttons">
    <button class="light">Light</button>
    <button class="dark">Dark</button>
    <button class="hot">hot</button>
    <button class="cold">cold</button>
    <button class="healthy">healthy</button>
  </div>`;

drinks.forEach((drink) => {
  DOMSelectors.display.insertAdjacentHTML(
    "beforeend",
    `<div class= "display-card">
  <h1 class="name">${drink.name}</h1>
  <img class= "display-img" src="${drink.img}">
  </div>`
  );
});
/* <h3 class="type"> Species:${drink.species}</h3>
<h3 class= "price> Price:${monkey.price}</h3>
<h3 class="old"> Age:${monkey.age}</h3>
<h3 class="gender"> Gender:${monkey.gender}</h3>
<h3 class="availability"> Available:${monkey.available}</h3>
<h3 class="IQ"> Smart:${monkey.smart}</h3> */

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
  const filteredCards = drinks
    .filter(
      (drink) => drink.hotorcold === "cold" || drink.hotorcold.includes("cold")
    )
    .map((drink) => {
      return (
        '<div class="card">' + "<span>" + drink.name + "</span>" + "</div>"
      );
    });
  cardsContainer.innerHTML = filteredCards.join("\n");
});

document.querySelector(".healthy").addEventListener("click", function () {
  console.clear();
  const filteredCards = drinks
    .filter((drink) => drink.healthy === true)
    .map((drink) => {
      return (
        '<div class="card">' + "<span>" + drink.name + "</span>" + "</div>"
      );
    });
  cardsContainer.innerHTML = filteredCards.join("\n");

  drinks.forEach((drink) => console.log(drink.name));
});
