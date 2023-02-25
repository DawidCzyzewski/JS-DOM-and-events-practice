"use strict:";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesContainer = document.querySelector("#boxes");
const inputValue = document.querySelector("#controls input");
const constBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

let i = 0;

const createBoxes = (amount) => {
  console.log("amount: ", amount);
  destroyBox();
  for (i; i < amount; i++) {
    console.log("i in loop: ", i);
    const newBox = document.createElement("div");
    let size = 20 + i * 10;
    Object.assign(newBox.style, {
      backgroundColor: getRandomHexColor(),
      height: `${size}px`,
      width: `${size}px`,
    });
    boxesContainer.append(newBox);
  }
};

const destroyBox = () => {
  i = 0;
  // inputValue.value = 1;
  boxesContainer.innerHTML = "";
};

constBtn.addEventListener("click", () => {
  createBoxes(inputValue.value);
});
destroyBtn.addEventListener("click", destroyBox);

// ---------------------- Clear code upper ------------------------------------------------
// ---------------------- Just comment upper and uncomment  these lines -------------------
// ---------------------- Code with comments and logs under -------------------------------

// // default function
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// // adding DOM elements
// const boxesContainer = document.querySelector("#boxes");
// const inputValue = document.querySelector("#controls input");
// const constBtn = document.querySelector("[data-create]");
// const destroyBtn = document.querySelector("[data-destroy]");

// // we will use i to for loop
// let i = 0;

// // function will create as many boxes as is input value
// const createBoxes = (amount) => {
//   for (i; i < amount; i++) {
//     const newBox = document.createElement("div");

//     let size = 20 + i * 10;
//     Object.assign(newBox.style, {
//       backgroundColor: getRandomHexColor(),
//       height: `${size}px`,
//       width: `${size}px`,
//     });
//     boxesContainer.append(newBox);
//   }
// };

// // Function to destroy boxes
// const destroyBox = () => {
//   i = 0;
//   // inputValue.value = 1;
//   boxesContainer.innerHTML = "";
// };

// // connecting functions to buttons
// constBtn.addEventListener("click", () => {
//   createBoxes(inputValue.value);
// });
// destroyBtn.addEventListener("click", destroyBox);
