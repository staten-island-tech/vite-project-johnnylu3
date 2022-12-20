import { drinks } from "./drinks";

const DOMSelectors = {
  button: document.getElementById("colorbtn"),
  container: document.getElementById("container"),
  submit: document.querySelector("#form"),
  box: document.querySelector("#app"),
  input: document.querySelectorAll(".textbox"),
};
export { DOMSelectors };

destinations.forEach((destination) => {
  DOMSelectors.displaycontainer.insertAdjacentHTML(
    "afterbegin",
    `<div class="menu-card"> 
    <h2 class="menu-item"></h2> <div class="img-container">  
    <div class="img-overlay"></div> 
    <img src="./public/.jpg" alt="" class="menu-img"> </div> <h3 class="item-price"></h3>
<button class="btn">$${destination}</button></div>`
  );
});

function filterA() {
  drinks
    .filter((el) => el.type.includes("cold"))
    .forEach((el) => {
      console.log(el.name);
    });
}

function filterA() {
  drinks
    .filter((el) => el.type.includes("cold"))
    .forEach((el) => {
      console.log(el.name);
    });
}

function filterA() {
  drinks
    .filter((el) => el.type.includes("cold"))
    .forEach((el) => {
      console.log(el.name);
    });
}

filterA();
