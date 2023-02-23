"use  strict:";

const decrement = document.querySelector("button[data-action='decrement'");
const increment = document.querySelector("button[data-action='increment'");
const value = document.getElementById("value");

let counterValue = Number(value.textContent);
counterValue = 0;

decrement.addEventListener("click", () => {
  counterValue--;
  value.innerText = counterValue;
});

increment.addEventListener("click", () => {
  counterValue++;
  value.innerText = counterValue;
});

// ---------------------- Clear code upper ------------------------------------------------
// ---------------------- Just comment upper and uncomment  these lines -------------------
// ---------------------- Code with comments and logs under -------------------------------

// // Geting elements, which will be nessesery to listen and change
// const decrement = document.querySelector("button[data-action='decrement'");
// const increment = document.querySelector("button[data-action='increment'");
// const value = document.getElementById("value");

// // Checking all
// // console.log("Decrement.dataset.action: ", decrement.dataset.action);
// // console.log("Increment.dataset.action: ", increment.dataset.action);
// // console.log("Value: ", value);

// // Checking type of value.textContent and changing it to number
// // console.log("Type of value.textContent: ", typeof value.textContent); //string

// let counterValue = Number(value.textContent);
// // console.log("Type of value.textContent after Number(): ", typeof counterValue); //number
// counterValue = 0;
// // console.log(counterValue) //actually 0

// // setting event listeners on buttons decrement and increment witch inline function adding or substracting one afrer click and setting result as value element
// decrement.addEventListener("click", () => {
//   counterValue--;
//   // console.log("After decrement 1: ", counterValue);
//   value.innerText = counterValue;
// });

// increment.addEventListener("click", () => {
//   counterValue++;
//   // console.log("After increment 1: ", counterValue);
//   value.innerText = counterValue;
// });
