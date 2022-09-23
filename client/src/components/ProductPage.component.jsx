import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ImageStepper from "./ImageStepper.component";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "./Button.component";
import Div from "@mui/material/Divider";
import Loading from "./Loading.component";

function ProductPage() {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const req = async () => {
      const res = await axios.get(`/api/store/product/${id}`);
      console.log(res.data);
      setData(res.data);
    };
    req();
  }, []);
  const handleAddToCart = () => {
    console.log("add to cart");
  };
  return (
    <>
      {data.images === undefined ? (
        <Loading />
      ) : (
        <Box sx={{ marginTop: "100px", height: "800px" }}>
          <Stack spacing={3}>
            <Typography variant="h3" component="h2">
              {data.title}
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <ImageStepper images={data.images} />
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="subtitle" component="h2">
                ${data.price}
              </Typography>
              <Button onClick={() => handleAddToCart()}>+ Cart</Button>
            </Stack>
            <Div></Div>
            <Typography variant="body1" gutterBottom>
              {data.description}
            </Typography>
          </Stack>
        </Box>
      )}
    </>
  );
}

export default ProductPage;
