"use strict:";

const controler = document.getElementById("font-size-control");
const text = document.getElementById("text");

controler.value = 0;

controler.addEventListener("change", changeSize);

function changeSize() {
  let rangeNr = Number(controler.value);
  text.style.fontSize = `${rangeNr}px`;
}

// ---------------------- Clear code upper ------------------------------------------------
// ---------------------- Just comment upper and uncomment  these lines -------------------
// ---------------------- Code with comments and logs under -------------------------------

// // Geting elements, which will be nessesery to listen and change
// const controler = document.getElementById("font-size-control");
// const text = document.getElementById("text");

// // adding event listener to input
// controler.addEventListener("change", changeSize);

// // creating function, which will change font size of text when position of slider will be changed. Method by event.currentTarger.value
// function changeSize(event) {
//   //   console.log("Checking attributes of event: ", event);
//   //   console.log("Attributes of value.target: ", value.currentTarget);
//   //   console.log("event.target.value: ", event.currentTarget.value);
//   //   console.log(typeof ` ${event.currentTarget.value}`); //string
//   let rangeNr = Number(event.currentTarget.value);
//   console.log("range value: ", rangeNr);
//   text.style.fontSize = `${rangeNr}px`;
// }

//OR

// // creating function, which will change font size of text when position of slider will be changed. Method by controler.value
// function changeSize() {
// console.log("input element: ", controler);
// console.log("input.value: ", controler.value);
//     let rangeNr = Number(controler.value);
//     text.style.fontSize = `${rangeNr}px`;
//   }
