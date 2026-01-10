function Listitem({ ville }) {
  return (
    <div>
      {ville.map((itemvile, index) => (
        <>
          <p key={index}>{itemvile.name}</p>
          <p key={index}>{itemvile.surface} km</p>
        </>
      ))}
    </div>
  );
}

export default Listitem;
