import { useContext } from "react";
import { Cart } from "./CartContext";

let CartNumber = () => {
    let cart_details = useContext(Cart);
    return(
        <>
            <button onClick={cart_details.remove_to_cart}>Remove to Cart</button>
        </>
    )
}

export default CartNumber;