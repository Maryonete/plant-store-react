import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import PlantItem from "./PlantItem";
import QuestionForm from "./QuestionForm";

function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map((plant) => (
          <PlantItem key={plant.id} plant={plant} />
        ))}
      </ul>
      {/* <QuestionForm /> */}
    </div>
  );
}

export default ShoppingList;
