import { useEffect, useState } from "react";
import ProductItems from "../pages/ProductItems";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then((response) => response.json())
      .then((data) => setProducts(data.meals));
  }, []);

  useEffect(() => {
    if (products) {
      const filteredProducts = products.filter((product) => {
        return (
          product.strMeal.toLowerCase().includes(search.toLowerCase()) ||
          product.strArea.toLowerCase().includes(search.toLowerCase()) ||
          (product.strTags &&
            product.strTags.toLowerCase().includes(search.toLowerCase())) ||
          product.strCategory.toLowerCase().includes(search.toLowerCase())
        );
      });
      setFiltered(filteredProducts);
    }
  }, [search, products]);

  return (
    <div>
      <section className="search-container">
        <Link to="/">
          <GiKnifeFork />
        </Link>
        <input
          type="text"
          placeholder="Type something to search"
          onChange={(event) => setSearch(event.target.value)}
          value={search}
        />
      </section>

      <section className="result-container">
        {search &&
          filtered.map((product) => {
            return (
              <ProductItems
                key={product.idMeal}
                idMeal={product.idMeal}
                strMeal={product.strMeal}
                strMealThumb={product.strMealThumb}
              />
            );
          })}
      </section>
    </div>
  );
};
export default Search;
