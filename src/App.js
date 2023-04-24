import { useState } from "react";
// funtion for squars
function Square() {
  
  // initiates the handleClick function when an item with Square class name is clicked
return <button className="square">
    {value}</button>
}

// the primary function in the file
export default function Board() {
  // changes from x to o
  const [xIsNext, setXIsNext] = useState(true);
  // creates an array of 9 and sets them to null
 const [squares, setSquares] = useState(Array(9).fill(null))

 function handleClick(i) {
  // prevents squares from changing after being filled
  if (squares[i]) {
    return;
  }
  const nextSquares = squares.slice();
  if (xIsNext) {
    nextSquares[i] = "X";
  } else {
    nextSquares[i] = "O"
  }
  setSquares(nextSquares);
  setXIsNext(!xIsNext)
}
  return (
    // a fragment tag for wrapping multiple elements
    <>
    {/* the first board row */}
    <div className="boardrow">
      {/* calls the Square function for each square and assigns each square a spot in the Squares array */}
      <Square value={squares[0]} />
      <Square value={squares[1]} />
      <Square value={squares[2]} />
    </div>

    {/* the second board row */}
    <div className="boardrow">
    <Square value={squares[3]} />
    <Square value={squares[4]} />
    <Square value={squares[5]} />
    </div>

    {/* the third board row */}
    <div className="boardrow">
    <Square value={squares[6]} />
    <Square value={squares[7]} />
    <Square value={squares[8]} />
    </div>








    </>
  );
}