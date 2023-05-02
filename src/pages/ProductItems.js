import { Link, useNavigate } from "react-router-dom";
import clickSound from "../sounds/mouse-click.wav";

const ProductItems = (props) => {
  const handleClick = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  return (
    <Link
      to={`categoryResults/${props.idMeal}`}
      onClick={handleClick}
      className="productItems"
    >
      <div className="product-item">
        <div className="image">
          <img src={props.strMealThumb} alt="image" />
        </div>
        <h3>{props.strMeal}</h3>
      </div>
    </Link>
  );
};

export default ProductItems;
