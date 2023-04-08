
window.onload = function() {
    var lab =new Labyrinth();
    lab.printConsole();
  } 
  
  Labyrinth.prototype.printDisplay = function(id) {
    // get a reference to the DOM element with the provided ID
    var container = document.getElementById(id);
    
    for (var i = 0; i < this.map.length; i++) {
      var row = document.createElement('div');
            for (var j = 0; j < this.map[i].length; j++) {
        var element = document.createElement('span');
        
        // set the text content of the <span> element to a space or a wall character
        if (this.map[i][j] === 0) {
          element.textContent = ' ';
        } else {
          element.textContent = '*';
        }
        
        // add the <span> element to the current row
        row.appendChild(element);
      }
      
      // add the current row to the container element
      container.appendChild(row);
    }
  };
  
  
  

