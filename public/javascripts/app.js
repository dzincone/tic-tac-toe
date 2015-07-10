var board = document.getElementsByClassName("main-board")[0];

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
    cell.innerHTML = "New"
  } else if( e.target.className === "cell1") {
    var cell = document.getElementsByClassName("cell1")[0];
    cell.innerHTML = "New"
  }else if( e.target.className === "cell2") {
    var cell = document.getElementsByClassName("cell2")[0];
    cell.innerHTML = "New"
  }else if( e.target.className === "cell3") {
    var cell = document.getElementsByClassName("cell3")[0];
    cell.innerHTML = "New"
  }else if( e.target.className === "cell4") {
    var cell = document.getElementsByClassName("cell4")[0];
    cell.innerHTML = "New"
  }else if( e.target.className === "cell5") {
    var cell = document.getElementsByClassName("cell5")[0];
    cell.innerHTML = "New"
  }else if( e.target.className === "cell6") {
    var cell = document.getElementsByClassName("cell6")[0];
    cell.innerHTML = "New"
  }else if( e.target.className === "cell7") {
    var cell = document.getElementsByClassName("cell7")[0];
    cell.innerHTML = "New"
  }else if( e.target.className === "cell8") {
    var cell = document.getElementsByClassName("cell8")[0];
    cell.innerHTML = "New"
  }


})
