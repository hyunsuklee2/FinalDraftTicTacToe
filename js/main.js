console.log('Hello')

/*---------------------- constants ----------------*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];


/*----------------- app's state (variables) ---------------*/
let board;

let turn = 'X';

let win;

let scoreboard = {x : 0, o :0};

const click = new Audio("sounds/click.wav"); //sounds everytime we click 

const winnerGif = docum.getElementById("gif4Winners");

/*--------------- cached element references --------------*/
const squares = Array.from(document.querySelectorAll('#board div')); 
    //queryselectorall () allows us to find the element with the id of .board and selecting all the div children of that element(grabs a secion of a div)

const messages = document.querySelector('h2'); //selects the whole h2 section from document 


/*-------------------- event listeners ----------------------*/
document.getElementById('board').addEventListener('click', handleTurn);

document.getElementById('reset-button').addEventListener('click', init);

/*----- -----------------functions -------------------*/
function init() { //init function to check if squares are present 
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];

    winnerGif.style.display = 'none';

    render();   


    };

function render() {
    board.forEach(function(mark, index) {
        //this moves the value of the board item into the squares[idx]
        squares[index].textContent = mark;
        });

        messages.textContent = win === 'T' ? `TIE GAME! ` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
        };

    init();   

function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
        });
        
        board[idx] = turn;

        turn = turn === 'X' ? 'O' : 'X'; // if turn equals X then make it O's turn, else 'X' turn
        //same in if statment for code above
        // if (turn === 'X') {
        // turn = 'O' 
        // } else {
        // turn = 'X' 
        // };


        console.log(board); // check console logs to make sure it's working!
   
        win = getWinner();


        render();
    };

getWinner = () => { //new way to write a function called arrow function
    let winner = null;
    
    winningCombos.forEach(function(combo, index) {
        
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
  });

    winner ? winnerGif.style.display = '' : {};

    //if winner return winner : ELSE IF board includes a space then return null(no winner) : ELSE no winner and no empty spaces thats a Tie 'T'
    return winner ? winner : board.includes('') ? null : 'T';


};

    // getWinner = () => {
    //     return 'HelloWOrld';
        
    //     }

updateScoreboard = (winner) => { //cant get the scoreboard
    if (++scoreboard[winner]==3) {
        alert("Game over! " + winner + " has won three matches"); 	
    } 
}

