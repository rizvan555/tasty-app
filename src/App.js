import { Route, Routes } from "react-router-dom";
import "./App.css";
import Random from "./components/Random";
import CategoryList from "./pages/CategoryList";
import ProductDetails from "./pages/ProductDetails";
import ProductItems from "./pages/ProductItems";
import ProductList from "./pages/ProductList";
import CategoryResults from "./pages/CategoryResults";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CategoryList />} />
        <Route path="/random" element={<Random />} />
        <Route path="/productItems" element={<ProductItems />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/productList/:id" element={<ProductDetails />} />
        <Route path="/categoryList" element={<CategoryList />} />
        <Route path="/categoryList/:idCategory" element={<CategoryResults />} />
      </Routes>
    </div>
  );
}

export default App;
