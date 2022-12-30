import "../styles/style.css";
import "./drinks";
import "./dom";
import { drinks } from "./drinks";
import { DOMSelectors } from "./dom";

const filterHot = drinks.filter((drink) => drink.hotorcold.includes("hot"));

const filterCold = drinks.filter((drink) => drink.hotorcold.includes("cold"));
const filterHealthy = drinks.filter((drink) => drink.healthy === true);

function print(r) {
  return r.forEach((drink) => {
    console.log(drink.name);
  });
}

function showAll() {
  DOMSelectors.display.innerHTML = ``;
  drinks.forEach((drink) => {
    DOMSelectors.display.insertAdjacentHTML(
      "afterbegin",
      `<div class="display-card">
      <h4 class="display-name">${drink.name}</h4>
      <img class="display-img" src="${drink.img}"></img>
      <h5 class="display-price">$${drink.price}</h5>
      </div>`
    );
  });
}

function hot() {
  console.clear();
  print(filterHot);
  filterHot.map((el) => {
    DOMSelectors.display.insertAdjacentHTML(
      "afterbegin",
      `<div class="display-card">
      <h4 class="display-name">${el.name}</h4>
      <img class="display-img" src="${el.img}"></img>
      <h5 class="display-price">$${el.price}</h5>
      </div>`
    );
  });
}
function cold() {
  console.clear();
  print(filterCold);
  filterCold.map((el) => {
    DOMSelectors.display.insertAdjacentHTML(
      "afterbegin",
      `<div class="display-card">
      <h4 class="display-name">${el.name}</h4>
      <img class="display-img" src="${el.img}"></img>
      <h5 class="display-price">$${el.price}</h5>
      </div>`
    );
  });
}

function healthy() {
  console.clear();
  print(filterHealthy);
  filterHealthy.map((el) => {
    DOMSelectors.display.insertAdjacentHTML(
      "afterbegin",
      `<div class="display-card">
      <h4 class="display-name">${el.name}</h4>
      <img class="display-img" src="${el.img}"></img>
      <h5 class="display-price">$${el.price}</h5>
      </div>`
    );
  });
}

showAll();

document.querySelector(".light-theme").addEventListener("click", function () {
  document.body.classList.remove("dark");
  document.body.classList.add("light");
});

document.querySelector(".dark-theme").addEventListener("click", function () {
  document.body.classList.remove("light");
  document.body.classList.add("dark");
});
DOMSelectors.hot.addEventListener("click", function () {
  if (DOMSelectors.display.classList.contains("hot")) {
  } else {
    DOMSelectors.display.innerHTML = ``;
    DOMSelectors.display.classList.remove("healthy", "cold");
    DOMSelectors.display.classList.add("hot");
    hot();
  }
});
DOMSelectors.cold.addEventListener("click", function () {
  if (DOMSelectors.display.classList.contains("cold")) {
  } else {
    DOMSelectors.display.innerHTML = ``;
    DOMSelectors.display.classList.remove("healthy", "hot");
    DOMSelectors.display.classList.add("cold");
    cold();
  }
});

DOMSelectors.healthy.addEventListener("click", function () {
  if (DOMSelectors.display.classList.contains("healthy")) {
  } else {
    DOMSelectors.display.innerHTML = ``;
    DOMSelectors.display.classList.remove("cold", "hot");
    DOMSelectors.display.classList.add("healthy");
    healthy();
  }
});
