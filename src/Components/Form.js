import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" onChange={handleChange} />
        <button type="submit">submit</button>
      </form>
      <p>{name}</p>
    </div>
  );
}

export default Form;
