"use strict:";

const inputElem = document.getElementById("name-input");
const outputElem = document.getElementById("name-output");

inputElem.value = "";

const changeOutput = () => {
  if (inputElem.value === "") outputElem.textContent = "Anonymous";
  else outputElem.textContent = inputElem.value;
};

inputElem.addEventListener("input", changeOutput);

// ---------------------- Clear code upper ------------------------------------------------
// ---------------------- Just comment upper and uncomment  these lines -------------------
// ---------------------- Code with comments and logs under -------------------------------

// // Geting elements, which will be nessesery to listen and change
// const inputElem = document.getElementById("name-input");
// const outputElem = document.getElementById("name-output");

// // console.log(inputElem.value);

// // Clearing input.value to avoid problems afrer refresh site with text in input
// inputElem.value = "";

// // Adding function, which will check if input element is empty or not and then set value of output element
// const changeOutput = () => {
//   if (inputElem.value === "") outputElem.textContent = "Anonymous";
//   else outputElem.textContent = inputElem.value;
// };

// // adding event listener with changeOutput function on every change in input element
// inputElem.addEventListener("input", changeOutput);
