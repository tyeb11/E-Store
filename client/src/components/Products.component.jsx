import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ImageListContainer } from "../styles/ImageListContainer.styles";
import Loading from "./Loading.component";
import ProductItem from "./ProductItem.component";

function Products() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const req = async () => {
      const res = await axios.get(
        `/api/store/categories/${id}/products?skip=0`
      );
      setProducts(res.data);
    };
    req();
  }, []);

  return (
    <Box sx={{ marginTop: "80px", border: "1px solid black" }}>
      {products.length === 0 ? (
        <Loading />
      ) : (
        <ImageListContainer>
          {products.map((item) => (
            <ProductItem {...item} />
          ))}
        </ImageListContainer>
      )}
    </Box>
  );
}

export default Products;
