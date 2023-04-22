import { useState } from "react";
// funtion for squars
function Square() {
  const [value, setValue] = useState(null);

// function for clicking squares
function handleClick() {
  setValue('X')
}
  return <button className="square"
    onClick={handleClick}>
    
    {value}</button>
}

// the primary function in the file
export default function Board() {
  return (
    // a fragment tag for wrapping multiple elements
    <>
    {/* the first board row */}
    <div className="boardrow">
      <Square />
      <Square />
      <Square />
    </div>

    {/* the second board row */}
    <div className="boardrow">
    <Square />
    <Square />
    <Square />
    </div>

    {/* the third board row */}
    <div className="boardrow">
    <Square />
    <Square />
    <Square />
    </div>








    </>
  );
}