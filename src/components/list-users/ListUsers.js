import { useEffect, useState } from "react";
import { getUsers } from "../../api/users/getUsers";
import User from "../user/User";
import "../list-users/ListUsers.css";

export default function ListUsers() {
  const [users, setUsers] = useState([]);
  const [isFething, setIsFething] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      setIsFething(true);
      const users = await getUsers();
      setUsers(users);
      setIsFething(false);
    }
    fetchUsers();
  }, []);

  return (
    <ul className="user-list">
      <p>Users</p>
      {isFething ? (
        <p>loading</p>
      ) : (
        users.map((user) => (
          <User key={user.id} name={user.name} id={user.id} />
        ))
      )}
    </ul>
  );
}
