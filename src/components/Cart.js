const plantes = [
  { plante: "monstera", prix: 8 },
  { plante: "lierre", prix: 10 },
  { plante: "bouquet de fleurs", prix: 15 },
];
const Cart = () => {
  let totalPrix = 0;

  // Utiliser un tableau pour stocker les éléments de la liste
  const listPlantes = plantes.map(({ plante, prix }) => {
    totalPrix += prix;
    return (
      <li key={plante}>
        {plante} - {prix} €
      </li>
    ); // Utiliser une clé unique pour chaque élément de liste
  });

  return (
    <div>
      <h2>Panier</h2>

      <ul>{listPlantes}</ul>
      <p>Total: {totalPrix}</p>
    </div>
  );
};

export default Cart;
