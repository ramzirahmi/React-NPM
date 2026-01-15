import axios from "axios";
import { useEffect, useState } from "react";

function Blog() {
  const [users, setUsers] = useState([]);
  //https://jsonplaceholder.typicode.com
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <p>this is page Blog</p>

      <div>
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              background: "#ddd",
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
            }}
          >
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
