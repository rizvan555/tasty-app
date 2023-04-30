import { useNavigate } from "react-router-dom";

const ProductItems = (props) => {
  const navigator = useNavigate();

  const handleItemClick = () => {
    navigator(`productList/${props.strMeal}`);
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
