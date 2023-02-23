"use strict:";

const input = document.getElementById("validation-input");
input.value = "";
let expectedNum = Number(input.dataset.length);

input.addEventListener("blur", () => {
  if (input.value === "") {
    input.removeAttribute("class");
  } else if (input.value.length === expectedNum) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
});

// ---------------------- Clear code upper ------------------------------------------------
// ---------------------- Just comment upper and uncomment  these lines -------------------
// ---------------------- Code with comments and logs under -------------------------------

// // Geting elements, which will be nessesery to listen and change

// const input = document.getElementById("validation-input");

// // Clearing element input to avoid problems after refresh site

// input.value = "";

// // Getting number from string dataset in HTML

// let expectedNum = Number(input.dataset.length);

// // creating event listener, which will check number of letters in input and set right class

// input.addEventListener("blur", () => {
//   if (input.value === "") {
//     input.removeAttribute("class");
//     // console.log("input.value = 0 : ", input.id);
//   } else if (input.value.length === expectedNum) {
//     input.classList.add("valid");
//     // console.log("input.value valid: ", input.id);
//   } else {
//     input.classList.add("invalid");
//     // console.log("input.value invalid: ", input.id);
//   }
// });
