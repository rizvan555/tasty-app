import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Search from "../components/Search";

function CategoryResult() {
  const { idCategory } = useParams();
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${idCategory}`)
      .then((response) => response.json())
      .then((data) => {
        setMeals(data.meals);
      });
  }, [idCategory]);

  return (
    <div>
      <Search />
      {meals.map((meal) => {
        return (
          <div key={meal.idMeal}>
            <p>{meal.strMeal}</p>
            <img
              src={meal.strMealThumb}
              alt="image"
              style={{ width: "30px" }}
            />
          </div>
        );
      })}
    </div>
  );
}
export default CategoryResult;
