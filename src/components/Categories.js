import { plantList } from "../datas/plantList";

const Categories = ({ categorie, updateCategorie }) => {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <label>
      Choisissez une catégorie :
      <select
        name="select_categorie"
        id="select_categorie"
        onChange={(e) => updateCategorie(e.target.value)}
      >
        <option defaultValue></option>

        {categories.map((cat) => (
          <option value={cat} key={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={() => updateCategorie("")}>X</button>
    </label>
  );
};
export default Categories;
