import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

// let width = screen.width;

// if (width < 768) {
// }

const leftBox = document.querySelector("#left-box");

window.addEventListener("resize", () => {
  const screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    leftBox.classList.add("d-none");
  } else {
    leftBox.classList.remove("d-none");
  }
});
