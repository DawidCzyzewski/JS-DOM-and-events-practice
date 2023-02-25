"use strict:";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const span = document.querySelector(".color");

const changeColor = () => {
  let color = getRandomHexColor();
  body.style.background = color;
  span.textContent = color;
};

button.addEventListener("click", changeColor);

// ---------------------- Clear code upper ------------------------------------------------
// ---------------------- Just comment upper and uncomment  these lines -------------------
// ---------------------- Code with comments and logs under -------------------------------

// // default function:
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// // Geting elements, which will be nessesery to listen and change
// const button = document.querySelector(".change-color");
// const body = document.querySelector("body");
// const span = document.querySelector(".color");

// // console.log("button element: ", button);

// // creating function to add effect of getRandomHexColor as background color and name of it to span
// const changeColor = () => {
//   // function changeColor() {
//   // console.log("button clicked");
//   // console.log("result of getRandomHexColor function: ", getRandomHexColor());
//   let color = getRandomHexColor()
//   body.style.background = color;
//   span.textContent = color;
// };

// // Adding event listener with function changeColor to button:
// button.addEventListener("click", changeColor);
