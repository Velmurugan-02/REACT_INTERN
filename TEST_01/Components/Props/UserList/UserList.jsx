import { useState } from "react";
import UserItem from "./UserItem";

const UserList = () => {
  const user_data = ["Velmurugan", "Aakash", "Jerin"];
  const [userdetails] = useState(user_data); // Parent owns data

  const display = (user) => {
    alert(`User Selected: ${user}`);
  };

  return (
    <>
      <h2>This is the list of Users</h2>
      {userdetails.map((user, index) => (
        <UserItem key={index} name={user} display={display} />
      ))}
    </>
  );
};

export default UserList;
