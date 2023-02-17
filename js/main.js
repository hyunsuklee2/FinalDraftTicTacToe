console.log('Hello')

/*----- constants -----*/


/*----- app's state (variables) -----*/
let board;

let turn = 'X';



/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div')); 
    //queryselectorall () allows us to find the element with the id of .board and selecting all the div children of that element(grabs a secion of a div)

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);

/*----- functions -----*/
function init() { //init function to check if squares are present 
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];

    render();   

    };

function render() {
    board.forEach(function(mark, index) {
        //this moves the value of the board item into the squares[idx]
        squares[index].textContent = mark;
        });
        };

    init();   

function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
        });
        
        board[idx] = turn;
        
        console.log(board); // check console logs to make sure it's working!
        };