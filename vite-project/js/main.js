import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
import { drinks } from "./drinks";

document.querySelector("#app").innerHTML = `
  <h1>Hello?????</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
console.log(drinks);

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});
