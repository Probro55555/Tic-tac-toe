class Board {
  constructor(size = 3) {
    this.size = size;
    let board1 = [];
    for (let i = 0; i < 3; i++) {
      board1[i] = [];
      for(let j=0; j < 3; j++) {
        board1[i][j] = "";
        
      }
      
      
    }
    this.grid = board1;
    
  }
  prit() {
    one.textContent = this.grid[0][0];
    two.textContent = this.grid[0][1];
    three.textContent = this.grid[0][2];
    four.textContent = this.grid[1][0];
    five.textContent = this.grid[1][1];
    six.textContent = this.grid[1][2];
    seven.textContent = this.grid[2][0];
    eight.textContent = this.grid[2][1];
    nine.textContent = this.grid[2][2];
    console.table(JSON.parse(JSON.stringify((this.grid))));
   
  }
  reset() {
    for(let i =0; i<3;i++) {
      this.grid[i] = [];
      for(let j = 0; j< 3; j++) {
        this.grid[i][j] = "";
      }
    }
    this.prit();
  }
  mark(marker,cooardinates) {
    let full;
    let winning;
    
    

    
    
    console.log(marker,cooardinates);
    let available = this.isempty();
    console.log(available);
    
    let row = parseInt(cooardinates[0]) ;
    let column = parseInt(cooardinates[1]);
    for (let k = 0; k< available.length; k++) {
      if (cooardinates == available[k]) {
        this.grid[row][column] = marker;
      }
      
    } 
    /* winning = this.win();
    full = this.isfull(); */
      
   /* if (winning == "X" || winning == "O") {
    console.log("Game over!!!");
    console.log(`${winning} wins!!!!`);
    break;
   }
   if (full == true) {
    console.log("Draw");
    break;
   } */
    
  
    

  }
  isempty() {
    let available = [];
    for (let i = 0; i< 3;i++) {
      for (let j = 0; j<3; j++) {
        if (this.grid[i][j] == "") {
          available.push(String(i) + String(j));
        }
      }
    }
    return available;
  }
  
  isfull() {
    let remaining = this.isempty();
    if (remaining.length == 0) {
      return true;
    }
    else {
      return false;
    }
  }

  win() {
    if ((this.grid[0][0] == "X" && this.grid[0][1] == "X" && this.grid[0][2] == "X")|| (this.grid[1][0] == "X" && this.grid[1][1] == "X" && this.grid[1][2] == "X")||(this.grid[2][0] == "X" && this.grid[2][1] == "X" && this.grid[2][2] == "X") || (this.grid[0][0] == "X" && this.grid[1][0] == "X" && this.grid[2][0] == "X")|| (this.grid[0][1] == "X" && this.grid[1][1] == "X" && this.grid[2][1] == "X")
    || (this.grid[0][2] == "X" && this.grid[1][2] == "X" && this.grid[2][2] == "X")|| (this.grid[0][0] == "X" && this.grid[1][1] == "X" && this.grid[2][2] == "X") || (this.grid[0][2] == "X" && this.grid[1][1] == "X" && this.grid[2][0] == "X")) {
      
      return "X";
      
      
    }
    else if (((this.grid[0][0] == "O" && this.grid[0][1] == "O" && this.grid[0][2] == "O")|| (this.grid[1][0] == "O" && this.grid[1][1] == "O" && this.grid[1][2] == "O")||(this.grid[2][0] == "O" && this.grid[2][1] == "O" && this.grid[2][2] == "O") || (this.grid[0][0] == "O" && this.grid[1][0] == "O" && this.grid[2][0] == "O")|| (this.grid[0][1] == "O" && this.grid[1][1] == "O" && this.grid[2][1] == "O")
    || (this.grid[0][2] == "O" && this.grid[1][2] == "O" && this.grid[2][2] == "O")|| (this.grid[0][0] == "O" && this.grid[1][1] == "O" && this.grid[2][2] == "O") || (this.grid[0][2] == "O" && this.grid[1][1] == "O" && this.grid[2][0] == "O"))) {
      
    return "O";
    }
    else {
      return false;
    }
  }

 

}

class GameController {
  constructor(currentcurrentplayer,gameover) {
    const gameboard = new Board(3);
    this.gameboard = gameboard; 
    this.currentcurrentplayer = currentcurrentplayer;
    this.gameover = gameover;
      
    const player1 = {
      names: "Player1",
      marker: "X"
    };
    const player2 = {
      names: "Player2",
      marker: "O" 
    };
    this.player1 = player1;
    this.player2 = player2;
  }
  startgame() {
    this.currentcurrentplayer = this.player1;
    this.gameboard.reset();
    turn.textContent = `${this.player1.names}'s turn`;
    document.body.style.backgroundColor = "lightblue";
    return this.currentcurrentplayer;
  }

  
  
  player_switch() {
    
    if (this.currentcurrentplayer == this.player1) {
      this.currentcurrentplayer = this.player2;
      if (this.gameover != true) {
      turn.textContent = `${this.player2.names}'s turn`;
      document.body.style.backgroundColor = "lightgreen";
      }
      else {
        turn.textContent = "";
        document.body.style.backgroundColor = "salmon";
      }
      
      
    } 
    
    else {

      this.currentcurrentplayer = this.player1;
      if (this.gameover != true) {
      turn.textContent = `${this.player1.names}'s turn`;
      document.body.style.backgroundColor = "lightblue";
      }
      else {
        turn.textContent = "";
        document.body.style.backgroundColor = "salmon";
      }
    }
    
    
  }
  

  

  playturn(code) {
    
    const cells = [one,two,three,four,five,six,seven,eight,nine];
    if(this.gameover == true) {
      for (let k = 0; k< cells.length;k++) {
        cells[k].style.pointerEvents = "none";
      }
      turn.textContent = "";
      
      return ;
    }
    
    
    for (let k=0;k<cells.length;k++) {
      if (cells[k].textContent != "") {
        cells[k].style.pointerEvents = "none";
      }
    }
      
      //let cooardinates = prompt(`It is ${current_player.names}'s turn with marker ${current_player.marker}. Enter where you want to place marker: `);
      let cooardinates = code;
      this.gameboard.mark(this.currentcurrentplayer.marker,cooardinates);
      
      let winning = this.gameboard.win();
      let full = this.gameboard.isfull();
      this.gameboard.prit();
      if (winning == "X" || winning == "O") {
        console.log("Game over!!!");
        if (winning == "X") {
        console.log(`${this.player1.names} wins!!!!`);
        result.textContent = `${this.currentcurrentplayer.names} wins!!!`;
        this.gameover = true;
        
        
        
        }
        else {
          console.log(`${this.player2.names} wins!!!!`);
          result.textContent = `${this.currentcurrentplayer.names} wins!!!`;
          this.gameover = true;
          
        }
        
      }
      
   if (full == true && winning == false) {
    console.log("Draw");
    result.textContent = "It's a draw!!!";
    this.gameover = true;
    this.gameboard.prit();
    
   } 

      
      
    
    this.gameboard.prit();
    
    this.player_switch();
  }
    
}

const box = document.createElement("div");
box.classList.add("box");
document.body.appendChild(box);

const turn = document.querySelector(".turn");

const reset = document.querySelector(".reset");

reset.addEventListener("click",() => {

  game.gameboard.reset();
  const cells = [one,two,three,four,five,six,seven,eight,nine];
  for (let k = 0; k< cells.length; k++) {
    cells[k].style.pointerEvents = "all";
  }
  game.gameover = false;
  result.textContent = "";
  game.startgame();

});

const one = document.createElement("div");
one.classList.add("small");
one.id = "one";
box.appendChild(one);



const two = document.createElement("div");
two.classList.add("small");
two.id = "two";
box.appendChild(two);

const three = document.createElement("div");
three.classList.add("small");
three.id = "three";
box.appendChild(three);

const four = document.createElement("div");
four.classList.add("small");
four.id = "four";
box.appendChild(four);

const five = document.createElement("div");
five.classList.add("small");
five.id = "five";
box.appendChild(five);

const six = document.createElement("div");
six.classList.add("small");
six.id = "six";
box.appendChild(six);

const seven = document.createElement("div");
seven.classList.add("small");
seven.id = "seven";
box.appendChild(seven);

const eight = document.createElement("div");
eight.classList.add("small");
eight.id = "eight";
box.appendChild(eight);

const nine = document.createElement("div");
nine.classList.add("small");
nine.id = "nine";
box.appendChild(nine);

const small = document.querySelectorAll(".small");
let p1_name = document.querySelector("#p1_name");
let p2_name = document.querySelector("#p2_name");

p1_name.addEventListener("input",() => {
  game.player1.names = p1_name.value;
});
p2_name.addEventListener("input",() => {
  game.player2.names = p2_name.value;
});






small.forEach((smallie) => {
  smallie.addEventListener("click",() => {
    let code;

 
  if (smallie.id == one.id) {
    code = "00";
   
  }
  else if (smallie == two) {
    code = "01";
  
  }
  else if (smallie == three) {
    code = "02";
  
  }

  else if (smallie == four) {
    code = "10";
  
  
  }
  else if (smallie == five) {
    code = "11";
  
  }

  else if (smallie == six) {
    code = "12";
  
  }
  else if (smallie == seven) {
    code = "20";
  
  }
  else if (smallie == eight) {
    code = "21";
  
  }
  else if (smallie == nine) {
    code = "22";
  
  } 
  game.playturn(code);
   });
  });

  let a = 0;

  const result = document.querySelector(".result");

  const start = document.querySelector(".start");
  start.addEventListener("click",() => {
     game.startgame();
  });


/* one.addEventListener("click",() => {
   code = "00";
   
   
   
   
   

});

two.addEventListener("click",() => {
  code = "01";
  
  
});

three.addEventListener("click",() => {
  code = "02";
  
  
});

four.addEventListener("click",() => {
  code = "10";
  
  
});

five.addEventListener("click",() => {
  code = "11";
  
  
});

six.addEventListener("click",() => {
  code = "12";
  
  
});

seven.addEventListener("click",() => {
  code = "20";
  
  
});

eight.addEventListener("click",() => {
  code = "21";
  
  
});

nine.addEventListener("click",() => {
  code = "22";
  
  

}); */
const game = new GameController();
 
 


