const Recommendation = () => {
  const currentMonth = new Date().getMonth;
  const isSprint = currentMonth > 2 && currentMonth < 6;
  return isSprint ? (
    <div className="lmj-banner-recommendation">Rempotez</div>
  ) : (
    <div className="lmj-banner-recommendation">Ce n'est pas le moment</div>
  );
};
export default Recommendation;
