import { useEffect, useState } from "react";

const Random = () => {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => setMeal(data.meals[0]));
  }, []);

  console.log(meal);

  return (
    <div>
      {meal ? (
        <div>
          <h1>Your random menu</h1>
          <h2>{meal.strMeal}</h2>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <h3>{meal.strArea} Dish</h3>
          <p>{meal.strInstructions}</p>
        </div>
      ) : (
        <p>Loading meal...</p>
      )}
    </div>
  );
};

export default Random;



