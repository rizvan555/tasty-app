import Search from "../components/Search";

const ProductItems = (props) => {
  // const handleItemClick = (id) => {
  //   window.location.href = `/bestseller/${props.id}`;
  // };

  return (
    <>
      <div>
        <Search />
        <div key={props.idMeal}>
          <h2>{props.strMeal}</h2>
          <img src={props.strMealThumb} alt="image" style={{ width: "60px" }} />
        </div>
      </div>
    </>
  );
};

export default ProductItems;
