
const DOMSelectors = {
  button: document.getElementById("colorbtn"),
  container: document.getElementById("container"),
  submit: document.querySelector("#form"),
  box: document.querySelector("#app"),
  input: document.querySelectorAll(".textbox"),
  display: document.querySelector(".display")
};
export { DOMSelectors };

drinks.filter(()=> .hotorcold.includes("hot") )


/* const DOMSelectors = {
  btnA: document.querySelector(".btnA"),
  btnB: document.querySelector(".btnB"),
  btnC: document.querySelector(".btnC"),
  appDisplay: document.querySelector(".appetizers"),
  phoDisplay: document.querySelector(".noodleSoup"),
  sandDisplay: document.querySelector(".sandwiches"),
  app: document.querySelector(""),
  pho: document.querySelector(""),
  banh: document.querySelector(""),
};




const DOMSelectors = {
  btnA: document.querySelector(".A"),
  btnB: document.querySelector(".B"),
  btnC: document.querySelector(".C"),
  hot: document.querySelector(".A"),
  cold: document.querySelector(".B"),
  healthy: document.querySelector(".C"),
  appDisplay: document.querySelector(".appetizers"),
  phoDisplay: document.querySelector(".noodleSoup"),
  sandDisplay: document.querySelector(".sandwiches"),

export { DOMSelectors };

function filterA() {
  drinks
    .filter((el) => el.type.includes("cold"))
    .forEach((el) => {
      console.log(el.name);
    });};
    
.filter(()=> .hotorcold.includes("cold") || .hotorcold === ("cold"))
 */
  monkeys.forEach((drink) => {
    DOMSelectors.display.insertAdjacentHTML(
      "beforeend",
      `<div class= "display-card">
    <h1 class="name">${drink.name}</h1>
    <img class= "display-img" src="${drink.img}">
    <h3 class= "price> Price:${drink.price}</h3>
    <h3 class="old"> Age:${drink.hotorcold}</h3>
    <h3 class="gender"> Gender:${drink.healthy}</h3>
    <h3 class="IQ"> Smart:${drink.type}</h3>
    </div>`
    );
  });