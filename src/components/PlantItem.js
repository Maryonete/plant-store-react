import CareScale from "./CareScale";
import "../styles/PlantItem.css";

const PlantItem = ({ plant }) => {
  return (
    <li key={plant.id} className="lmj-plant-item">
      <img
        src={plant.cover}
        alt={"${plant.name} cover"}
        className="lmj-plant-item-cover"
        onClick={() => handleClick(plant.name)}
      />
      {plant.name}
      {/* {plant.isBestSale && <div className="lmj-sales">Solde</div>} */}
      <div>
        <CareScale careType="water" scaleValue={plant.water} />
        <CareScale careType="light" scaleValue={plant.light} />
      </div>
    </li>
  );
};

function handleClick(plantName) {
  alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`);
}
export default PlantItem;
