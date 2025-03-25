import { useEffect, useState } from "react";
import { getUsers } from "../../api/users/getUsers";
import User from "../user/User";
import "../list-users/ListUsers.css";

export default function ListUsers() {
  const [users, setUsers] = useState([]);
  console.log(users);

  async function fetchUsers() {
    const users = await getUsers();
    setUsers(users);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ul className="user-list">
      {users.length ? (
        users.map((user) => <User key={user.id} name={user.name} />)
      ) : (
        <p>loading</p>
      )}
    </ul>
  );
}
