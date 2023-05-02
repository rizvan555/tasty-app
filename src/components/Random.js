import { useEffect, useState } from "react";
import "../css/random.css"

const Random = () => {
  const [meal, setMeal] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => {
        setMeal(data.meals[0]);
        console.log(meal);
        const newIngredients = [];

        for (let i = 1; i <= 20; i++) {
          const ingredient = data.meals[0][`strIngredient${i}`];
          const measure = data.meals[0][`strMeasure${i}`];
          if (ingredient) {
            newIngredients.push(`${measure} ${ingredient}`);
          }
        }

        setIngredients(newIngredients);
      });
  }, []);

//Funktion for youtube video
  const Video = ({ video }) => {
    const handleClick = () => {
      window.open(video.strYoutube, "_blank");
    };
    return (
      <div>
        <button className="button_video" onClick={handleClick}>Watch video</button>
      </div>
    );
  };


  return (
    <div  className="container_random">
      {meal ? (
        <section className="container_box">
          <div>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </div>
            
          
          <section className="all_texts">
            <div className="container_left">
              <h2>{meal.strMeal}</h2>
              <li>{meal.strInstructions.split(`. `)}</li>
            </div>
            
            
            {ingredients.length === 0 ? (
            <p>Sorry, no ingredients</p>
          ) : (
              
              <ul className="container_right">
                <h3>Ingredients</h3>
              {ingredients.map((ingredient, index) => (
                <p key={index}>{ingredient}</p>
                
              ))}
                  <Video video={meal} />
              </ul>
              
          )}
          </section>
        </section>
      ) : (
        <p>Loading meal...</p>
      )}
    </div>
  );
};

export default Random;
