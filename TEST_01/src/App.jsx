import { Routes,Route } from "react-router-dom";
import Navbar from "../Components/Routing/Navbar";
import Home from "../Components/Routing/Pages/Home";
import About from "../Components/Routing/Pages/About";
import Contact from "../Components/Routing/Pages/Contact";
import Profile from "../Components/Routing/NestedRouting/Profile";
import Admin from "../Components/Routing/Protected_Routing/Admin";
import Login from "../Components/Routing/Protected_Routing/Login";

let isAuth = true;

function App() {
  return (
    <>
    <Navbar />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/admin" element={
            <Admin isAuth={isAuth}>
              <Admin></Admin>
            </Admin>
          }>
          </Route>
          <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App;
