

function startPage(){
<<<<<<< HEAD




  var turn = 0;

=======
  

  
  
  var turn = 0;
  
>>>>>>> origin/master
  function checkTurn() {
    if (turn % 2 === 0) {
      return "X";
    } else {
      return "O";
    };
  }
<<<<<<< HEAD

  var customAlert = new alertBox();


=======
  
  var customAlert = new alertBox();
  
  
>>>>>>> origin/master
  var ended = false;
  function checkArr(array) {
    if (array.every(checkAllX)) {
      ended = true;
      computer = false;
      customAlert.render("Player X IS VICTORIOUS!!");
      $("#diag-box-body").css("background-color", color["X"]);
    } else if (array.every(checkAllO)) {
      ended = true;
      computer = false;
      customAlert.render("Player O IS VICTORIOUS!!");
      $("#diag-box-body").css("background-color", color["O"]);
    } else {
      return false;
    };
  }
<<<<<<< HEAD

  function checkAllX(element, index, array) {
    return (element === "X")
  }

  function checkAllO(element, index, array) {
    return (element === "O")
  }

=======
  
  function checkAllX(element, index, array) {
    return (element === "X")
  }
  
  function checkAllO(element, index, array) {
    return (element === "O")
  }
  
>>>>>>> origin/master
  function check(thing) {
    var arr = [];
    thing.each(function() {
      arr.push($(this).text());
    });
    if (checkArr(arr)) {
      resetAll();
    }
  }
<<<<<<< HEAD

=======
  
>>>>>>> origin/master
  function checkAll() {
    var allCombos = selectors();
    allCombos.forEach(check);
  };
<<<<<<< HEAD

=======
  
>>>>>>> origin/master
  function selectors() {
    var threes = [".L", ".M", ".R", ".T", ".MM", ".B", ".DR", ".DL"];
    var formatted = threes.map(function(el) {
      return $(el);
    })
    return formatted;
  }
<<<<<<< HEAD

=======
  
>>>>>>> origin/master
  function displayTurn() {
    if (checkTurn(turn) === "X") {
      $("#X").show();
      $("#O").css("display", "none");
    } else {
      $("#O").show();
      $("#X").css("display", "none");
    };
  };
<<<<<<< HEAD

  displayTurn();

=======
  
  displayTurn();
  
>>>>>>> origin/master
  var color = {
    "X": "#8E0000",
    "O": "#00004C"
  };
<<<<<<< HEAD

  var shadow = "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white";

=======
  
  var shadow = "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white";
  
>>>>>>> origin/master
  $(".cell").on("click", function() {
    square = $(this);
    if (square.text() === "") {
      if (checkTurn() === "X") {
        square.css("color", color[checkTurn()]);
        square.css("text-shadow", shadow);
        occupiedByX.push(square.attr("id"));
      } else if (checkTurn() === "O") {
        square.css('color', color[checkTurn()]);
        square.css("text-shadow", shadow);
        occupiedByO.push(square.attr("id"));
      };
      $(this).text(checkTurn());
      turn += 1;
      deleteCell(square.attr("id"));
      checkAll();
      if (checkAll() === undefined) {
        computer = true;
        checkState();
      } else if ((turn >= 9)) {
<<<<<<< HEAD
=======
        /*
        alert("Game has ended. No one won.  Play another.");
        $("#diag-box-body").css('font-size', '10px');*/
>>>>>>> origin/master
        resetAll();
      } else if (checkAll() !== undefined) {
        checkAll();
        resetAll();
      }
    };
  });
<<<<<<< HEAD

=======
  
>>>>>>> origin/master
  function resetAll() {
    $(".cell").text("");
    turn = 0;
    displayTurn();
    allCells = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    occupiedByX = [];
    occupiedByO = [];
    computer = false;
    ended = false;
    $("#switch-player").show();
    $("#buttons").css("padding-left", "0");
    $("#diag-overlay").css('display', 'none');
    $("#diag-box").css('display', 'none')
  }
<<<<<<< HEAD

  var allCells = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var occupiedByX = [];
  var occupiedByO = [];

=======
  
  var allCells = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var occupiedByX = [];
  var occupiedByO = [];
  
>>>>>>> origin/master
  function deleteCell(stringN) {
    pos = allCells.indexOf(stringN);
    allCells.splice(pos, 1);
    return allCells;
  }
<<<<<<< HEAD

=======
  
>>>>>>> origin/master
  var combos = {
    ".L": ['1', '4', '7'],
    ".M": ['2', '5', '8'],
    ".R": ['3', '6', '9'],
    ".T": ['1', '2', '3'],
    ".MM": ['4', '5', '6'],
    ".B": ['7', '8', '9'],
    ".DR": ['1', '5', '9'],
    ".DL": ['3', '5', '7']
  };
<<<<<<< HEAD

=======
  
>>>>>>> origin/master
  function whichList(val) {
    if (val === "X") {
      return [occupiedByX, occupiedByO];
    } else {
      return [occupiedByO, occupiedByX];
    }
  }
<<<<<<< HEAD

=======
  
>>>>>>> origin/master
  function getMoveArray() {
    var player = whichList(checkTurn())[0];
    var opponent = whichList(checkTurn())[1];
    var prevent = {};
    var goAhead = {};
    var sample = jQuery.extend(true, {}, combos);
    var sample2 = jQuery.extend(true, {}, combos);
    opponent.forEach(function(cell) {
      for (var x in sample) {
        var current = sample[x];
        if (checkIncluded(cell, current)) {
          prevent[x] = removedArr(cell, current);
        }
      }
    })
    player.forEach(function(cell) {
      for (var x in sample2) {
        var current = sample2[x];
        if (checkIncluded(cell, current)) {
          goAhead[x] = removedArr(cell, current);
        }
      }
    });
    return [goAhead, prevent];
  }
<<<<<<< HEAD

=======
  
>>>>>>> origin/master
  function checkIncluded(element, array) {
    if (array.indexOf(element) !== -1) {
      return true;
    } else {
      return false;
    };
  }
<<<<<<< HEAD

=======
  
>>>>>>> origin/master
  function removedArr(element, array) {
    var pos = array.indexOf(element);
    array.splice(pos, 1);
    return array;
  }
<<<<<<< HEAD

=======
  
>>>>>>> origin/master
  function getMoveRandom() {
    var length = allCells.length;
    var pos = Math.floor((Math.random() * length) + 1);
    return allCells[pos];
  };
<<<<<<< HEAD

=======
  
>>>>>>> origin/master
  function getMove(array) {
    var goAhead = array[0];
    var prevent = array[1];
    var possibilities = []
    for (var x in goAhead) {
      if ((goAhead[x].length === 1) && (checkIncluded(goAhead[x][0], allCells) === true)) {
        return goAhead[x][0];
      } else if /* By Ian Agpawa */ ((goAhead[x].length === 2) && (checkIncluded(goAhead[x][0], allCells) === true)) {
        possibilities.push(goAhead[x][0]);
      };
    };
    for (var y in prevent) {
      if ((prevent[y].length === 1) && (checkIncluded(prevent[y][0], allCells) === true)) {
        return prevent[y][0];
      } else if ((prevent[y].length === 2) && (checkIncluded(prevent[y][0], allCells) === true)) {
        possibilities.push(prevent[y][0]);
      };
    };
    return (available() || possibilities[0] || getMoveRandom());
  }
<<<<<<< HEAD

=======
  
>>>>>>> origin/master
  function available() {
    if (checkIncluded("5", allCells)) {
      return "5";
    } else {
      return false;
    };
  };
<<<<<<< HEAD

  var computer = false;

=======
  
  var computer = false;
  
>>>>>>> origin/master
  function computerMove() {
    var arrays = getMoveArray();
    var nextMove = getMove(arrays);
    occupiedByO.push(nextMove);
    deleteCell(nextMove);
    var id = "#" + nextMove;
    $(id).text(checkTurn());
    $(id).css("color", color[checkTurn()]);
    $(id).css("text-shadow", shadow);
  };
<<<<<<< HEAD


=======
  
  
>>>>>>> origin/master
  function checkState() {
    if (computer === true) {
      computerMove();
      turn += 1;
      if (checkAll() != undefined) {
<<<<<<< HEAD

=======
  
>>>>>>> origin/master
        checkAll();
        resetAll();
      } else if ((turn >= 9) && (ended == false)){
        checkAll();
<<<<<<< HEAD
        customAlert.render("Game has ended in a draw.");
=======
        customAlert.render("Game has ended. No one won.");
>>>>>>> origin/master
        $("#diag-box-body").css('background-color', "#010303");
      };
      computer = false;
    }
  }
<<<<<<< HEAD

  $("#reset-button").on("click", function() {
    resetAll();
  });

=======
  
  $("#reset-button").on("click", function() {
    resetAll();
  });
  
>>>>>>> origin/master
  $("#switch-player").on("click", function() {
    computer = true;
    checkState();
    $("#switch-player").css("display", "none");
    displayTurn();
    checkAll();
  });
<<<<<<< HEAD

  function alertBox() {
    this.render = function(msg) {
      var winW = ($(window).width()).toString();
      var halfW = ((winW/2) - (490 * 0.5)).toString() +"px";
      console.log(halfW);
=======
  
  function alertBox() {
    this.render = function(msg) {
      var winW = ($(window).width()).toString();
>>>>>>> origin/master
      var winH = ($(window).height()).toString();
      var diagOverlay = $("#diag-overlay");
      var diagBox = $("#diag-box");
      diagOverlay.css("display", "block");
      diagOverlay.css("height", winH + "px");
<<<<<<< HEAD
      diagBox.css("margin-top", "150px");
      diagBox.css("margin-left", halfW);
=======
      diagBox.css("margin-left", ((winW/2) - (500 * 0.5)).toString() +"px");
      diagBox.css("margin-top", "150px");
>>>>>>> origin/master
      diagBox.css('display', "block");
      $("#diag-box-head").text("GAME OVER");
      $("#play-again").on('click', function() {
        resetAll();
      })
      $("#diag-box-body").text(msg);
    }
  }
<<<<<<< HEAD

}



$(document).ready(startPage);
$(document).on('page:load', startPage);
=======

}


$(document).ready(startPage);
$(document).on('page:load', startPage);
>>>>>>> origin/master
