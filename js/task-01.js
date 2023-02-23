"use strict:";

const categories = document.getElementById("categories");
const h2 = document.querySelectorAll("h2");
const item = document.getElementsByClassName("item");

console.log(`We have got ${item.length} categories in list.`);

h2.forEach((title) => {
  console.log(title.textContent);
  console.log(title.nextElementSibling.children.length);
});

// ---------------------- Clear code upper ------------------------------------------------
// ---------------------- Just comment upper and uncomment  these lines -------------------
// ---------------------- Code with comments and logs under -------------------------------

// // Geting elements, which will be nessesery to log

// // const categories = document.getElementById("categories");
// const item = document.getElementsByClassName("item");
// const h2 = document.querySelectorAll("h2");

// // console.log("Element item: ", item);
// // console.log("item length: ", item.length);
// // console.log("Element h2: ", h2);

// // Firstly I log how many categories is in list

// console.log(`We have got ${item.length} categories in list.`);

// // secondly for each title (h2) log name of category and how many children is in it

// h2.forEach((title) => {
//   // console.log("element title in forEach: ", title);
//   console.log(title.outerText);

//   // console.log(title.textContent);
//   console.log(title.nextElementSibling.children.length);
// });
