import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.categories);
      });
  }, []);

  return (
    <div className="categoryListContainer">
      <Search />
      {categories.map((category) => {
        return (
          <div key={category.idCategory} className="categoryList">
            <Link to={`/categoryList/${category.strCategory}`}>
              <h2>{category.strCategory}</h2>
              <img src={category.strCategoryThumb} alt="category" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryList;
