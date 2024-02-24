
import { FiShoppingCart } from "react-icons/fi";

import './CartButton.css';
import { useContext } from "react";
import AppContext from "../../context/AppContext";

function CartButton() {

  const { cartItens, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button 
     type="button" 
    className="cart__button"
    onClick={ () => setIsCartVisible(!isCartVisible)}
    >
        <FiShoppingCart />
        { cartItens.length > 0 && <span className="cart-status">{cartItens.length}</span>}
    </button>
  )
}

export default CartButton