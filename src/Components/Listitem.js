function Listitem({ ville }) {
  return (
    <>
      {" "}
      {ville.map((itemvile, index) => (
        <div key={index}>
          <p>{itemvile.name}</p>
          <p>{itemvile.surface} km</p>
          <p>----------------------</p>
        </div>
      ))}
    </>
  );
}

export default Listitem;
