import { Routes,Route } from "react-router-dom";
import Navbar from "../Components/Routing/Navbar";
import Home from "../Components/Routing/Pages/Home";
import About from "../Components/Routing/Pages/About";
import Contact from "../Components/Routing/Pages/Contact";
import Profile from "../Components/Routing/NestedRouting/Profile";
function App() {
  return (
    <>
    <Navbar />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </>
  )
}

export default App;
