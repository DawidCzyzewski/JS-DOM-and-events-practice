"use strict:";

const form = document.querySelector(".login-form");

form.addEventListener("submit", (submit) => {
  submit.preventDefault();

  const login = submit.currentTarget.elements[0].value;
  const password = submit.currentTarget.elements[1].value;

  if (login === "" || password === "") {
    alert("Please fill all the labels");
  } else {
    const object = { login, password };
    console.log(object);
  }
  submit.currentTarget.reset();
});

// ---------------------- Clear code upper ------------------------------------------------
// ---------------------- Just comment upper and uncomment  these lines -------------------
// ---------------------- Code with comments and logs under -------------------------------

// // Geting elements, which will be nessesery to listen and change
// const form = document.querySelector(".login-form");

// // Checking elements of form
// // console.log("form: ", form);
// // console.log("form[0].elements: ", form[0].elements);
// // console.log("form[0].elements: ", form[0].elements);

// form.addEventListener("submit", (submit) => {
//   submit.preventDefault();
//   //   console.log("checking submit: ", submit);
//   //   console.log("elements of submit.target: ", submit.target);
//   //   console.log("submit.target[0]: ", submit.target[0]); // email is here
//   //   console.log("submit.target[1]: ", submit.target[1]); // password is here
//   //   const login = submit.target[0].value;
//   //   const password = submit.target[1].value;

//   //   // But our task is to use "elements"
//   //   console.log(
//   //     "We have it alse here, as we have in instruction to task: ",
//   //     submit.currentTarget.elements
//   //   );

//   const login = submit.currentTarget.elements[0].value;
//   const password = submit.currentTarget.elements[1].value;

//   // console.log("login value: ", login);
//   // console.log("password value: ", password);

//   if (login === "" || password === "") {
//     alert("Please fill all the labels");
//   } else {
//     const object = { login, password };
//     console.log(object);
//   }
//   submit.currentTarget.reset();
// });
