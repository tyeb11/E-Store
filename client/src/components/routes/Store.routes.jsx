import { Route, Routes } from "react-router-dom";
import Categories from "../Categories.component.jsx";
import Products from "../Products.component.jsx";
function Store() {
  return (
    <Routes>
      <Route index element={<Categories />} />
      <Route path=":category" element={<Products />} />
    </Routes>
  );
}

export default Store;
