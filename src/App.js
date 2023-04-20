export default function Square() {
  return (
    // a fragment tag for wrapping multiple elements
    <>
    {/* the first board row */}
    <div className="boardrow">
      <button className="square">1</button>
      <button className="square">2</button>
      <button className="square">3</button>
    </div>

    {/* the second board row */}
    <div className="boardrow">
      <button className="square">4</button>
      <button className="square">5</button>
      <button className="square">6</button>
    </div>

    {/* the third board row */}
    <div className="boardrow">
      <button className="square">1</button>
      <button className="square">2</button>
      <button className="square">3</button>
    </div>








    </>
  );
}