import { useEffect, useState } from "react";

const Random = () => {

  const [randomMeals, setRandomMeals] = useState([])

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((res) => res.json())
      .then((data) =>
        
        setRandomMeals(data))
  })

  return (
    <div>
      <h1>Random</h1><h1>Random</h1>
    </div>
  );
};

export default Random;
