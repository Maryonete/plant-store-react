import sun from "../assets/sun.svg";
import water from "../assets/water.svg";

const CareScale = ({ scaleValue, careType }) => {
  const range = [1, 2, 3];
  const scaleType = careType === "light" ? sun : water;

  const quantite =
    scaleValue === 1 ? "peu" : scaleValue === 2 ? "modérement" : "beaucoup";

  //  peu/modérement/beaucoup de lumière/d'arrosage
  return (
    <div>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <img
            key={rangeElem.toString()}
            src={scaleType}
            onClick={() =>
              alert(
                "Cette plante requiert " +
                  quantite +
                  " " +
                  (careType === "light" ? "de lumiére" : "d'arrosage")
              )
            }
          />
        ) : null
      )}
    </div>
  );
};
export default CareScale;
