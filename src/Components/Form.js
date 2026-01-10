import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <select onChange={handleChange}>
          <option value="alex">alex</option>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
          <option value="Charlie">Charlie</option>
        </select>
        <input type="submit" value="Send" />
      </form>
      <p>{name}</p>
    </div>
  );
}

export default Form;
