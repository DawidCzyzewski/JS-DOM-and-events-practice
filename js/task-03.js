"use strict:";

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ul = document.querySelector(".gallery");

images.forEach((image) => {
  const template = `<li style="list-style: none"><img class="gallery__image" src="${image.url}" alt="${image.alt}" style="width: 500px"></li>`;
  ul.insertAdjacentHTML("beforeend", template);
});

ul.style.cssText = `
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
justify-content: center
`;

// ---------------------- Clear code upper ------------------------------------------------
// ---------------------- Just comment upper and uncomment  these lines -------------------
// ---------------------- Code with comments and logs under -------------------------------

// Default data:

// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// // getting element, which will be used
// const ul = document.querySelector(".gallery");

// // iterate over images and constructing HTML li and its img child containing src and alt from default array data

// images.forEach((image) => {
//   // console.log(image)
//   const template = `<li style="list-style: none"><img class="gallery__image" src="${image.url}" alt="${image.alt}" style="width: 500px"></li>`;
//   // console.log(template);
//   ul.insertAdjacentHTML("beforeend", template);
// });

// // adding classes to ul element

// ul.style.display = "flex"
// ul.style.flexDirection = "column"

// ul.style.cssText = `
//     display: flex;
//     flex-direction: row;
//     gap: 20px;
//     flex-wrap: wrap;
//     align-items: center;
// justify-content: center
// `;
