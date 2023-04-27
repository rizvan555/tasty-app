import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductItem from "../pages/ProductItems";

const Search = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(null);
  const [filtered, setFiltered] = useState(null);
  const navigator = useNavigate();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then((response) => response.json())
      .then((data) => setProducts(data.meals));
  }, []);

  const handleSearchFilter = () => {
    if (products) {
      const myProduct = products.filter((product) => product.idMeal === search);
      navigator(`search/${myProduct.idMeal}`);
    }
  };
  const handleEnterButton = (event) => {
    if (event && event.key === "Enter") {
      handleSearchFilter();
    }
  };

  return (
    <div>
      <section>
        <input
          type="text"
          placeholder="Type your food"
          onChange={(event) => setSearch(event.target.value)}
          value={search}
          onKeyPress={handleEnterButton}
        />
        <button onClick={handleSearchFilter}>Search</button>
      </section>
      <section>
        {filtered &&
          filtered.map((product) => {
            return (
              <ProductItem
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
