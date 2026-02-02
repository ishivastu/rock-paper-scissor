let userscore = document.getElementById("user-score");
let compscore = document.getElementById("computer-score");
let choices = document.querySelectorAll(".choice");

let arr = ["rock", "paper", "scissor"];

choices.forEach((btn) => {
  btn.addEventListener("click", (e) => {

    let user = e.target.id;
    let computer = arr[Math.floor(Math.random() * 3)];

    if (user === computer) {
      // draw → do nothing
    }

    else if (
      (user === "rock" && computer === "scissor") ||
      (user === "paper" && computer === "rock") ||
      (user === "scissor" && computer === "paper")
    ) {
      userscore.innerText = Number(userscore.innerText) + 1;
    }

    else {
      compscore.innerText = Number(compscore.innerText) + 1;
    }

  });
});
