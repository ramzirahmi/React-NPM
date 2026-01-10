import "./Listitem.css";
function Listitem({ ville }) {
  return (
    <>
      {ville.map(
        (itemville, index) =>
          // If Condition
          itemville.surface > 50 && (
            <div className="item" key={index}>
              <p>{itemville.name}</p>
              <p>{itemville.surface} km</p>
              <p>----------------------</p>
            </div>
          )
      )}
    </>
  );
}

export default Listitem;
