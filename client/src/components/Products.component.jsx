import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ImageListContainer } from "../styles/ImageListContainer.styles";
import ProductItem from "./ProductItem.component";

function Products() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const req = async () => {
      const res = await axios.get(
        `/api/store/categories/${category}/products?skip=0`
      );
      setProducts(res.data);
    };
    req();
  }, []);
  console.log(products);

  return (
    <Box sx={{ marginTop: "80px" }}>
      <ImageListContainer>
        {products.map((item) => (
          <ProductItem {...item} />
        ))}
      </ImageListContainer>
    </Box>
  );
}

export default Products;
