import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Search from "../components/Search";

function CategoryResults() {
  const { idCategory } = useParams();
  const [meals, setMeals] = useState([]);
  const [showResult, setShowResult] = useState(true);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${idCategory}`)
      .then((response) => response.json())
      .then((data) => {
        setMeals(data.meals);
      });
  }, [idCategory]);

  return (
    <div>
      <Search
        setShowResult={setShowResult}
        setShowCategories={() => {}}
        setShowDetails={() => {}}
      />

      {showResult && (
        <div>
          {meals.map((meal) => {
            return (
              <div key={meal.idMeal}>
                <Link to={`/categoryResults/${meal.idMeal}`}>
                  <p>{meal.strMeal}</p>
                  <img
                    src={meal.strMealThumb}
                    alt="image"
                    style={{ width: "50px" }}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default CategoryResults;
