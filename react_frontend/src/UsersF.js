import React, { useState, useEffect } from "react";

const Users = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/users")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUsers(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>{user.name}</strong> : {user.email}
          </li>
        ))}
      </ul>
    );
  }
};

export default Users;
