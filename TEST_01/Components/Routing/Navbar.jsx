import {Link} from "react-router-dom";

let Navbar = () => {
    return(
        <nav>
            <Link to="/">Home</Link><br></br>
            <Link to="/about">About</Link><br></br>
            <Link to="/contact">Contact</Link><br></br>
            <Link to="/profile">Profile</Link><br></br>
            <Link to="/admin">Admin</Link>
        </nav>
    );
}

export default Navbar;