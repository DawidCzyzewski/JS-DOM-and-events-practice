"use strict:";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach((element) => {
  const li = document.createElement("li");
  li.textContent = element;
  li.classList.add("item");
  const ul = document.querySelector("#ingredients");
  ul.append(li);
});

// ---------------------- Clear code upper ------------------------------------------------
// ---------------------- Just comment upper and uncomment  these lines -------------------
// ---------------------- Code with comments and logs under -------------------------------

// // Default data:

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// // iterate over ingredients and create for each element li with name of it and class "item"

// ingredients.forEach((element) => {
//   // console.log(element);
//   const li = document.createElement("li");
//   li.textContent = element;
//   // console.log(li.textContent);
//   li.classList.add("item");
//   const ul = document.querySelector("#ingredients");
//   ul.append(li);
// });
