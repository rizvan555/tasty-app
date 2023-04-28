import { useEffect, useState } from "react";
import ProductItems from "../pages/ProductItems";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { GiKnifeFork } from "react-icons/gi";
import Logo from "../resource/Nav.png";
import { Link } from "react-router-dom";
import "../css/search.css";

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

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="search_firstParentContainer">
      <Link to="/">
        <img src={Logo} alt={Logo} className="logo" />
      </Link>
      <section className="big-container">
        <h1 className="headline-searchbar">
          Find a recipe, an idea, an inspiration...
        </h1>
        <div className="search-container">
          <section className="search-box">
            <input
              type="text"
              placeholder="Type something to search"
              onChange={(event) => setSearch(event.target.value)}
              value={search}
            />
            <button onClick={reloadPage}>
              <IoIosCloseCircleOutline className="close-icon" size={20} />
            </button>
          </section>

          {/* <Link to="/">
            <GiKnifeFork />
          </Link> */}
              
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
      </section>
    </div>
  );
};
export default Search;
