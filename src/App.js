// funtion for squars
function Square({ value }) {

function handleClick() {
  console.log("clickerino")
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
      <Square value="1" />
      <Square value="2"  />
      <Square value="3"  />
    </div>

    {/* the second board row */}
    <div className="boardrow">
    <Square value="4"  />
    <Square value="5"  />
    <Square value="6"  />
    </div>

    {/* the third board row */}
    <div className="boardrow">
    <Square value="7"  />
    <Square value="8"  />
    <Square value="9"  />
    </div>








    </>
  );
}