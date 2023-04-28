import { useEffect, useState } from "react";

const Random = () => {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => setMeal(data.meals[0]));
  }, []);


  
  return (
    <div>
      {meal ? (
        <div>
          <h2>Your random menu</h2>
          <h3>{meal.strMeal}</h3>
          <p>{meal.strArea} Dish</p>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <p>{meal.strInstructions}</p>
        </div>
      ) : (
        <p>Loading meal...</p>
      )}
    </div>
  );
};

export default Random;



