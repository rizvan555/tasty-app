import { Route, Routes } from "react-router-dom";
import "./App.css";
import CategoryList from "./pages/CategoryList";
import Random from "./components/Random";
import ProductDetails from "./pages/ProductDetails";
import ProductItems from "./pages/ProductItems";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CategoryList />} />
        <Route path="/random" element={<Random />} />
        <Route path="/productItems" element={<ProductItems />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/productList/:id" element={<ProductDetails />} />

      </Routes>
   <CategoryResults/>
    </div>
  );
}

export default App;
