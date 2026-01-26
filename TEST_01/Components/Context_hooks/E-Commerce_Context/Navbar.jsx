import { useContext } from "react";
import { Cart } from "./CartContext";
let Navbar = () => {
    let cart_details = useContext(Cart);
    return(
        <>
            <p>{cart_details.cart}</p>
        </>
    )
}

export default Navbar;