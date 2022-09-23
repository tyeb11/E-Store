import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { ImageListContainer } from "../styles/ImageListContainer.styles.jsx";
import Box from "@mui/material/Box";
import CategoriesItem from "./CategoriesItem.component";
import Loading from "./Loading.component.jsx";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const req = async () => {
      try {
        const res = await axios.get("/api/store/categories");

        setCategories(res.data);
      } catch (e) {
        navigate("/");
      }
    };
    req();
  }, []);
  return (
    <Box sx={{ marginTop: "80px" }}>
      {categories.length === 0 && <Loading />}

      <ImageListContainer>
        {categories.map((item) => (
          <CategoriesItem key={item.id} category={item} />
        ))}
      </ImageListContainer>
    </Box>
  );
}

export default Categories;
