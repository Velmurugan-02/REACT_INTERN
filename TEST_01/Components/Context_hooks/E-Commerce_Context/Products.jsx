import { useContext } from "react";
import { Cart } from "./CartContext";

let Products = () => {
    let cart_details = useContext(Cart);
    return(
        <>
            <button onClick={cart_details.add_to_cart}>Add to Cart</button>
        </>
    )
}

export default Products;