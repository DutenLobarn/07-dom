console.log("Hello world");
// console.log(document)

const countButton = document.querySelector("#count-button");
const countOutput = document.querySelector("#count-output");

let clicks = 0;
Q;

countButton.addEventListener("click", () => {
  console.log("klickade på knappen");
  clicks++;
  if (clicks === 1) {
    countOutput.innerText = `Du har klickat ${clicks} gång.`;
  } else {
    countOutput.innerText = `Du har klickat ${clicks} gånger.`;
  }
});

// Live code with Mandus  12/11

// const mandusBtn = document.getElementsByClassName("mandus-btn");
// const mandusBtn = document.querySelectorAll(".mandus-btn");

const mandusBtn = document.querySelector(".mandus-btn");

mandusBtn.addEventListener("click", () => {
  console.log("klickade på mandus knappen");
});

console.log("Mandus1", mandusBtn);
