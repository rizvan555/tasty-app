import { useEffect , useState } from "react";
import { Link } from "react-router-dom";


const ProductDetails = () => {

  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`);
        const json = await response.json();
        setDetails(json.meals);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const meal = details[0];
  const instructions = meal.strInstructions.split("\r\n").map((instruction, index) => {
    return <li key={index}>{instruction}</li>;
  });
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        <p key={i}>
          {meal[`strIngredient${i}`]} - {meal[`strMeasure${i}`]}
        </p>
      );
    }
  }


  return (
    <div className="product-details">
      {details && details.length > 0 && <img src={meal.strMealThumb} alt="img" />}
      <h1>{meal.strMeal}</h1>
      <h2>Instructions</h2>
      <ul>{instructions}</ul>
      <h2>Ingredients</h2>
      <div>{ingredients}</div>
      <Link to={meal.strYoutube}>Watch on YouTube</Link>
    </div>
  );
};



export default ProductDetails;


      
