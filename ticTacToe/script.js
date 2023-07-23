console.log("hello tictactoe");

let music = new Audio("./music/music.mp3");
let audioTurn = new Audio("./music/ting.mp3");
let gameOver = new Audio("./music/gameover.mp3");
let isGameOver = false;

let turn = "X";
// function to check the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};
// function to check who win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");

  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " " + "Won";
      isGameOver = true;
      boxtext[e[0]].style.color = "red";
      boxtext[e[1]].style.color = "red";
      boxtext[e[2]].style.color = "red";

      document.querySelector("#cong").innerHTML =
        "Congratulation" + " = " + boxtext[e[0]].innerText;
      document.querySelector("#cong").style.color = "red";
      setTimeout(() => {
        boxtext[e[0]].style.color = "black";
        boxtext[e[1]].style.color = "black";
        boxtext[e[2]].style.color = "black";
        document.querySelector("#cong").style.color = "black";
      }, 5000);
      document
        .querySelector(".imgBox")
        .getElementsByTagName("img")[0].style.width = "160px";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
    }
  });
};

// game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (isGameOver != true) {
        document.getElementsByClassName(
          "info"
        )[0].innerText = `Turn for ${turn}`;
      }
    }
  });
});

document.getElementById("reset").addEventListener("click", () => {
  document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width =
    "0";
  let boxText = document.querySelectorAll(".boxtext");
  Array.from(
    boxText.forEach((element) => {
      element.innerText = "";
      turn = "X";
      isGameOver = false;
      document.getElementsByClassName("info")[0].innerText = `Turn for ${turn}`;
      document.querySelector("#cong").innerHTML = "";
      document.querySelector("#cong").style.color = "black";
    })
  );
});
