const UserItem = ({ name, display }) => {
  return (
    <>
      <button onClick={() => display(name)}>User Details: {name}</button>
    </>
  );
};

export default UserItem;
