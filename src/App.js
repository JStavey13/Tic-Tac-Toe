// funtion for squars
function Square() {
  return <button className="square">1</button>
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