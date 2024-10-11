import { useState, useEffect } from "react";
import "../styles/Cart.css";

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true);
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );
  useEffect(() => {
    document.title = `LMJ: ${total}€ d'achats`;
  }, [total]);

  function deleteToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      if (currentPlantSaved.amount < 2) {
        updateCart([
          ...cart.filter((plant) => plant.name !== currentPlantSaved.name),
        ]);
      } else {
        const cartFilteredCurrentPlant = cart.filter(
          (plant) => plant.name !== name
        );
        updateCart([
          ...cartFilteredCurrentPlant,
          { name, price, amount: currentPlantSaved.amount - 1 },
        ]);
      }
    }
  }
  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul>
            {cart.map(({ name, price, amount }, index) => (
              <div key={`${name}-${index}`}>
                {name} {price}€ x {amount}
                <button onClick={() => deleteToCart(name, price)}>X</button>
              </div>
            ))}
          </ul>
          <h3>Total :{total}€</h3>
          <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le Panier
      </button>
    </div>
  );
}

export default Cart;
