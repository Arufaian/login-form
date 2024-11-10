import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

const leftBox = document.querySelector("#left-box");

window.addEventListener("resize", () => {
  const screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    leftBox.classList.add("d-none");
  } else {
    leftBox.classList.remove("d-none");
  }
});
