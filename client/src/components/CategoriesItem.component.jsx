import {
  ImageContainer,
  BackgroudImage,
  Body,
} from "../styles/ImageConainer.styles";
import { useNavigate } from "react-router-dom";

function CategoriesItem({ category }) {
  const { image, name, id } = category;
  const navigate = useNavigate();

  const handleCategory = () => {
    navigate(`/store/${id}`);
  };

  return (
    <ImageContainer onClick={() => handleCategory()}>
      <BackgroudImage imageUrl={image} />
      <Body>
        <h2>{name}</h2>
        <p>Shop Now</p>
      </Body>
    </ImageContainer>
  );
}

export default CategoriesItem;
