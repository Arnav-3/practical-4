var CELL_SIZE = 40;

function Labyrinth() {
    this.map = [
        [0, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 0, 0],
        [1, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0]];



this.printConsole = function() {
    for (var i = 0; i < this.map.length; i++)
     {
      var rowString = '';
      for (var j = 0; j < this.map[i].length; j++) 
      {
        if (this.map[i][j] === 0) {
          rowString += ' '; 
        } else {
          rowString += '*'; 
        }
      }
      console.log(rowString);
    }
  }
}

var lab = new Labyrinth();
lab.printConsole();