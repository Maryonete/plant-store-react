import "../styles/Cart.css";

import { useState } from "react";

const Cart = () => {
  const monsteraPrice = 8;
  // cart : le state
  // updateCart : fonction pour maj ce state
  // useState(0) : état initial de notre state
  const [cart, updateCart] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer le Panier
      </button>
      <h2>Panier</h2>
      <div>
        Monstera : {monsteraPrice}€
        <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
      </div>
      <h3>Total : {monsteraPrice * cart}€</h3>
      <button onClick={() => updateCart(0)}>Vider le panier</button>
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
    </div>
  );
};

export default Cart;
