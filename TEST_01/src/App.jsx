import PropsPassing from "../Components/Props/PropsPassing";
import ChildrenProps from "../Components/Props/ChildrenProps";
import Parent_Props from "../Components/Props/Uplifting/Parent_Props";
import UserList from "../Components/Props/UserList/UserList";
function App() {
  return (
    <>
      <PropsPassing name = "Velmurugan" course = "MCA"></PropsPassing>
      <PropsPassing name = "Aakash" course = "BCA"></PropsPassing>
      <ChildrenProps company_name = "Zoho">
        <p>Zoho is product based company</p>
        <p>We will help to build products</p>
      </ChildrenProps>
      <ChildrenProps company_name = "Azasoft Solutions">
        <p>Azasoft is service based company</p>
        <p>We will help you for branding and digital marketing</p>
      </ChildrenProps>
      <Parent_Props></Parent_Props>
      <UserList></UserList>
    </>
  )
}

export default App;
