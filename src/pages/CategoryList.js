
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function CategoryList() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((json) => {
        setCategories(json.categories);
      });
  }, []);

  function handleCategorySelect(category) {
    categories.push(`/CategoryResults?category=${category}`);
  }

  return (
    <div>
      {categories.map((category, i) => {
        return (
          <div key={i}>
            <button onClick={() => handleCategorySelect(category.strCategory)}>
              <img src={category.strCategoryThumb} alt={category.strCategory} />
              <h2>{category.strCategory}</h2>
            </button>
          </div>
        );
      })}

    </div>
  );
}

export default CategoryList;
