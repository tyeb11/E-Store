import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { ImageListContainer } from "../styles/ImageListContainer.styles.jsx";
import Box from "@mui/material/Box";
import CategoriesItem from "./CategoriesItem.component";

function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const req = async () => {
      const res = await axios.get("/api/store/categories");
      setCategories(res.data);
    };
    req();
  }, []);
  return (
    <Box sx={{ marginTop: "80px" }}>
      <ImageListContainer>
        {categories.map((item) => (
          <CategoriesItem key={item.id} category={item} />
        ))}
      </ImageListContainer>
    </Box>
  );
}

export default Categories;