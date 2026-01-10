import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <textarea type="text" onChange={handleChange} />
        <input type="submit" value="Send" />
      </form>
      <p>{name}</p>
    </div>
  );
}

export default Form;
