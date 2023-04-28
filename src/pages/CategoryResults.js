import React, { useState, useEffect } from "react";



function CategoryResults() {
  const [categories, setCategories] = useState([
    "Beef",
    "Chicken",
    "Dessert",
    "Lamb",
    "Miscellaneous",
    "Pasta",
    "Pork",
    "Seafood",
    "Side",
    "Starter",
    "Vegan",
    "Vegetarian",
    "Breakfast",
    "Goat",
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryResults, setCategoryResults] = useState([]);

  useEffect(() => {
    async function fetchCategoryResults() {
      if (selectedCategory !== "") {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
        );
        const data = await response.json();
        setCategoryResults(data.meals);
      }
    }
    fetchCategoryResults();
  }, [selectedCategory]);

  function handleCategorySelect(category) {
    setSelectedCategory(category);
  }

  return (
    <div>
     
      <div>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategorySelect(category)}
          >
            {category}
        
          </button>
        ))}
      </div>
      {categoryResults.length > 0 && (
        <div>
          {categoryResults.map((result) => (
            <div key={result.idMeal}>{result.strMeal}
            <img src={result.strMealThumb} alt={result.strMeal} />
             

             </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryResults;
