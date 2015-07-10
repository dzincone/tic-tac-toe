var board = document.getElementsByClassName("main-board")[0];

var turn = [];

function checkGame() {
  var cell0 = document.getElementsByClassName("cell0")[0];
  var cell1 = document.getElementsByClassName("cell1")[0];
  var cell2 = document.getElementsByClassName("cell2")[0];
  var cell3 = document.getElementsByClassName("cell3")[0];
  var cell4 = document.getElementsByClassName("cell4")[0];
  var cell5 = document.getElementsByClassName("cell5")[0];
  var cell6 = document.getElementsByClassName("cell6")[0];
  var cell7 = document.getElementsByClassName("cell7")[0];
  var cell8 = document.getElementsByClassName("cell8")[0];

  if((cell0.innerHTML === "X" && cell4.innerHTML === "X" && cell8.innerHTML === "X" ) || (cell0.innerHTML === "X" && cell1.innerHTML === "X" && cell2.innerHTML === "X") || (cell0.innerHTML === "X" && cell3.innerHTML === "X" && cell6.innerHTML === "X") ||
  (cell1.innerHTML === "X" && cell4.innerHTML === "X" && cell7.innerHTML === "X") ||
  (cell3.innerHTML === "X" && cell4.innerHTML  === "X"&& cell5.innerHTML === "X") ||
  (cell6.innerHTML === "X" && cell7.innerHTML === "X" && cell8.innerHTML === "X") ||
  (cell6.innerHTML === "X" && cell4.innerHTML === "X" && cell2.innerHTML === "X") ||
  (cell2.innerHTML === "X" && cell5.innerHTML === "X" && cell8.innerHTML === "X") ){
    alert("You have won X!")
    cell0.innerHTML = "";
    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
    cell5.innerHTML = "";
    cell6.innerHTML = "";
    cell7.innerHTML = "";
    cell8.innerHTML = "";
    turn = [];
  }

  else if ((cell0.innerHTML === "O" && cell4.innerHTML === "O" && cell8.innerHTML === "O" ) || (cell0.innerHTML === "O" && cell1.innerHTML === "O" && cell2.innerHTML === "O") || (cell0.innerHTML === "O" && cell3.innerHTML === "O" && cell6.innerHTML === "O") ||
  (cell1.innerHTML === "O" && cell4.innerHTML === "O" && cell7.innerHTML === "O") ||
  (cell3.innerHTML === "O" && cell4.innerHTML  === "O"&& cell5.innerHTML === "O") ||
  (cell6.innerHTML === "O" && cell7.innerHTML === "O" && cell8.innerHTML === "O") ||
  (cell6.innerHTML === "O" && cell4.innerHTML === "O" && cell2.innerHTML === "O") ||
  (cell2.innerHTML === "O" && cell5.innerHTML === "O" && cell8.innerHTML === "O") ){
    alert("You have won O!")
    cell0.innerHTML = "";
    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
    cell5.innerHTML = "";
    cell6.innerHTML = "";
    cell7.innerHTML = "";
    cell8.innerHTML = "";
    turn = [];
  }
  else if (turn.length === 9){
    alert("Tie Game");
    cell0.innerHTML = "";
    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
    cell5.innerHTML = "";
    cell6.innerHTML = "";
    cell7.innerHTML = "";
    cell8.innerHTML = "";
    turn = []
  }

}


board.addEventListener("click", function(e) {
  if(e.target.className === "start-game") {
    board.innerHTML = "";
    var row = document.createElement("div");
    row.className = "row";
    board.appendChild(row);
    for(var i = 0; i < 3; i++) {
      var cell = document.createElement("div");
      cell.className = "cell" + i;
      row.appendChild(cell);
    }
    var row = document.createElement("div");
    row.className = "row";
    board.appendChild(row);
    for(var i = 3; i < 6; i++) {
      var cell = document.createElement("div");
      cell.className = "cell" + i;
      row.appendChild(cell);
    }
    var row = document.createElement("div");
    row.className = "row";
    board.appendChild(row);
    for(var i = 6; i < 9; i++) {
      var cell = document.createElement("div");
      cell.className = "cell" + i;
      row.appendChild(cell);
    }

  } else if( e.target.className === "cell0") {
    var cell = document.getElementsByClassName("cell0")[0];
            if (cell.innerHTML === "X") {
                cell.innerHTML = "X";
                cell.style.color = "red";
            } else if (cell.innerHTML === "O") {
                cell.innerHTML = "O";
                cell.style.color = "blue";
            }else if (turn.length === 0) {
              cell.innerHTML = "X";
              cell.style.color = "red";
              turn.push("turn");
            } else if(turn.length === 1) {
              cell.innerHTML = "O"
              cell.style.color = "blue";
              turn.push("turn");
            } else if (turn.length % 2 === 0){
              cell.innerHTML = "X";
              cell.style.color = "red";
              turn.push("turn")
            } else if (turn.length % 2 != 0) {
              cell.innerHTML = "O";
              cell.style.color = "blue";
              turn.push("turn");
            }
            if(turn.length <= 10){
              checkGame();
            }


  }

   else if( e.target.className === "cell1") {
    var cell = document.getElementsByClassName("cell1")[0];
          if (cell.innerHTML === "X") {
              cell.innerHTML = "X";
              cell.style.color = "red";
          } else if (cell.innerHTML === "O") {
              cell.innerHTML = "O";
              cell.style.color = "blue";
            }
            else if(turn.length === 0) {
              cell.innerHTML = "X";
              cell.style.color = "red";
              turn.push("turn");
            } else if(turn.length === 1) {
              cell.innerHTML = "O"
              cell.style.color = "blue";
              turn.push("turn");
            } else if (turn.length % 2 === 0){
              cell.innerHTML = "X";
              cell.style.color = "red";
              turn.push("turn")
            } else if (turn.length % 2 != 0) {
              cell.innerHTML = "O";
              cell.style.color = "blue";
              turn.push("turn");
            }
            if(turn.length <= 10){
              checkGame();
            }
  }


    else if( e.target.className === "cell2") {
    var cell = document.getElementsByClassName("cell2")[0];
          if (cell.innerHTML === "X") {
              cell.innerHTML = "X";
              cell.style.color = "red";
          } else if (cell.innerHTML === "O") {
              cell.innerHTML = "O";
              cell.style.color = "blue";
            }
            else if(turn.length === 0) {
              cell.innerHTML = "X";
              cell.style.color = "red";
              turn.push("turn");
            } else if(turn.length === 1) {
              cell.innerHTML = "O"
              cell.style.color = "blue";
              turn.push("turn");
            } else if (turn.length % 2 === 0){
              cell.innerHTML = "X";
              cell.style.color = "red";
              turn.push("turn")
            } else if (turn.length % 2 != 0) {
              cell.innerHTML = "O";
              cell.style.color = "blue";
              turn.push("turn");
            }
            if(turn.length <= 10){
              checkGame();
            }
  }


  else if( e.target.className === "cell3") {
    var cell = document.getElementsByClassName("cell3")[0];
    if (cell.innerHTML === "X") {
        cell.innerHTML = "X";
        cell.style.color = "red";
    } else if (cell.innerHTML === "O") {
        cell.innerHTML = "O";
        cell.style.color = "blue";
      }
      else if(turn.length === 0) {
      cell.innerHTML = "X";
      cell.style.color = "red";
      turn.push("turn");
    } else if(turn.length === 1) {
      cell.innerHTML = "O"
      cell.style.color = "blue";
      turn.push("turn");
    } else if (turn.length % 2 === 0){
      cell.innerHTML = "X";
      cell.style.color = "red";
      turn.push("turn")
    } else if (turn.length % 2 != 0) {
      cell.innerHTML = "O";
      cell.style.color = "blue";
      turn.push("turn");
    }
    if(turn.length <= 10){
      checkGame();
    }
  }


  else if( e.target.className === "cell4") {
    var cell = document.getElementsByClassName("cell4")[0];
    if (cell.innerHTML === "X") {
        cell.innerHTML = "X";
        cell.style.color = "red";
    } else if (cell.innerHTML === "O") {
        cell.innerHTML = "O";
        cell.style.color = "blue";
      }
      else if(turn.length === 0) {
      cell.innerHTML = "X";
      cell.style.color = "red";
      turn.push("turn");
    } else if(turn.length === 1) {
      cell.innerHTML = "O"
      cell.style.color = "blue";
      turn.push("turn");
    } else if (turn.length % 2 === 0){
      cell.innerHTML = "X";
      cell.style.color = "red";
      turn.push("turn")
    } else if (turn.length % 2 != 0) {
      cell.innerHTML = "O";
      cell.style.color = "blue";
      turn.push("turn");
    }
    if(turn.length <= 10){
      checkGame();
    }
  }


  else if( e.target.className === "cell5") {
    var cell = document.getElementsByClassName("cell5")[0];

    if (cell.innerHTML === "X") {
        cell.innerHTML = "X";
        cell.style.color = "red";
    } else if (cell.innerHTML === "O") {
        cell.innerHTML = "O";
        cell.style.color = "blue";
      }
      else if(turn.length === 0) {
      cell.innerHTML = "X";
      cell.style.color = "red";
      turn.push("turn");
    } else if(turn.length === 1) {
      cell.innerHTML = "O"
      cell.style.color = "blue";
      turn.push("turn");
    } else if (turn.length % 2 === 0){
      cell.innerHTML = "X";
      cell.style.color = "red";
      turn.push("turn")
    } else if (turn.length % 2 != 0) {
      cell.innerHTML = "O";
      cell.style.color = "blue";
      turn.push("turn");
    }
    if(turn.length <= 10){
      checkGame();
    }
  }


  else if( e.target.className === "cell6") {
    var cell = document.getElementsByClassName("cell6")[0];

    if (cell.innerHTML === "X") {
        cell.innerHTML = "X";
        cell.style.color = "red";
    } else if (cell.innerHTML === "O") {
        cell.innerHTML = "O";
        cell.style.color = "blue";
      }
      else if(turn.length === 0) {
      cell.innerHTML = "X";
      cell.style.color = "red";
      turn.push("turn");
    } else if(turn.length === 1) {
      cell.innerHTML = "O"
      cell.style.color = "blue";
      turn.push("turn");
    } else if (turn.length % 2 === 0){
      cell.innerHTML = "X";
      cell.style.color = "red";
      turn.push("turn")
    } else if (turn.length % 2 != 0) {
      cell.innerHTML = "O";
      cell.style.color = "blue";
      turn.push("turn");
    }
    if(turn.length <= 10){
      checkGame();
    }
  }


  else if( e.target.className === "cell7") {
    var cell = document.getElementsByClassName("cell7")[0];

    if (cell.innerHTML === "X") {
        cell.innerHTML = "X";
        cell.style.color = "red";
    } else if (cell.innerHTML === "O") {
        cell.innerHTML = "O";
        cell.style.color = "blue";
      }
      else if(turn.length === 0) {
      cell.innerHTML = "X";
      cell.style.color = "red";
      turn.push("turn");
    } else if(turn.length === 1) {
      cell.innerHTML = "O"
      cell.style.color = "blue";
      turn.push("turn");
    } else if (turn.length % 2 === 0){
      cell.innerHTML = "X";
      cell.style.color = "red";
      turn.push("turn")
    } else if (turn.length % 2 != 0) {
      cell.innerHTML = "O";
      cell.style.color = "blue";
      turn.push("turn");
    }
    if(turn.length <= 10){
      checkGame();
    }
  }


  else if( e.target.className === "cell8") {
    var cell = document.getElementsByClassName("cell8")[0];

    if (cell.innerHTML === "X") {
        cell.innerHTML = "X";
        cell.style.color = "red";
    } else if (cell.innerHTML === "O") {
        cell.innerHTML = "O";
        cell.style.color = "blue";
      }
      else if(turn.length === 0) {
      cell.innerHTML = "X";
      cell.style.color = "red";
      turn.push("turn");
    } else if(turn.length === 1) {
      cell.innerHTML = "O"
      cell.style.color = "blue";
      turn.push("turn");
    } else if (turn.length % 2 === 0){
      cell.innerHTML = "X";
      cell.style.color = "red";
      turn.push("turn")
    } else if (turn.length % 2 != 0) {
      cell.innerHTML = "O";
      cell.style.color = "blue";
      turn.push("turn");
    }
    if(turn.length <= 10){
      checkGame();
    }
  }


})
