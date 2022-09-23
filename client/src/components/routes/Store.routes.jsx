import { Route, Routes } from "react-router-dom";
import Categories from "../Categories.component.jsx";
import Products from "../Products.component.jsx";
import ProductPage from "../ProductPage.component.jsx";
function Store() {
  return (
    <Routes>
      <Route index element={<Categories />} />
      <Route path=":id" index element={<Products />} />
      <Route path="/product/:id" index element={<ProductPage />} />
    </Routes>
  );
}

export default Store;
