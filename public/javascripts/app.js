var board = document.getElementsByClassName("main-board")[0];

board.addEventListener("click", function(e) {
  if(e.target.className === "start-game") {
    board.innerHTML = "";
    for(var i = 0; i < 9; i++) {
      var cell = document.createElement("div");
      cell.className = "cell" + i;
      cell.innerHTML = "hello"
      board.appendChild(cell);
    }
  }


})
