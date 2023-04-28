const ProductItems = (props) => {
  const handleItemClick = () => {
    window.location.href = `/productList/${props.idMeal}`;
  };

  return (
    <div onClick={handleItemClick} className="productItems">
      <div className="image">
        <img src={props.strMealThumb} alt="image" />
      </div>
      <h3>{props.strMeal}</h3>
    </div>
  );
};

export default ProductItems;
