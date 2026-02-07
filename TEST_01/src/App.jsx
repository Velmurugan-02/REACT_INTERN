import UsernamePassword from "../Components/Storage_APIs/LocalStorage/UsernamePassword";
import SessionStorageNote from "../Components/Storage_APIs/SessionStorage/SessionStorageNote";

// import ToDoList from "./TASKS/TASK_01/TO_DO_LIST/ToDoList";
function App() {
  return (
    <>
      {/* <ToDoList /> */}
      <UsernamePassword /><br></br>
      <SessionStorageNote />
    </>
  )
}

export default App;
