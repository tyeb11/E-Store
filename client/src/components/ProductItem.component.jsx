import { BackgroudImage, ImageContainer } from "../styles/ImageConainer.styles";
import { Body, Title, Price } from "../styles/ProductContainer.styles";
function ProductItem({ id, title, price, images }) {
  const addToCart = () => {};
  return (
    <ImageContainer>
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
