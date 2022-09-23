import { useNavigate } from "react-router-dom";
import { BackgroudImage, ImageContainer } from "../styles/ImageConainer.styles";
import { Body, Title, Price } from "../styles/ProductContainer.styles";
function ProductItem({ id, title, price, images }) {
  const navigate = useNavigate();
  const addToCart = () => {};
  function handleProduct() {
    navigate(`/store/product/${id}`);
  }
  return (
    <ImageContainer onClick={() => handleProduct()}>
      <BackgroudImage imageUrl={images[0]} />
      <Body>
        <Title>{title}</Title>
        <Price>${price}</Price>
        {/* <AddCart onClick={() => addToCart()}></AddCart> */}
      </Body>
    </ImageContainer>
  );
}

export default ProductItem;
