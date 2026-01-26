import { createContext , useState } from "react"; 
import Navbar from "./Navbar" 
import Products from "./Products";
import CartNumber from "./CartNumber";
export const Cart = createContext();
let CartContext = () =>{
    let [cart,setCart] = useState(0);
    let cart_details = {
       cart : cart,
       add_to_cart : () =>{
        setCart(cart => cart + 1);
       },
       remove_to_cart : () =>{
        setCart(cart => cart - 1);
       },
    };
    return(
        <>  
            <Cart.Provider value = {cart_details}>
                <Navbar></Navbar>
                <Products></Products>
                <CartNumber></CartNumber>
            </Cart.Provider>
        </>
    )
}

export default CartContext;