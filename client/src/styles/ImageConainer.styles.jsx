import styled from "styled-components";

const stone = "#336b87";
const mist = "#90afc5";
const shadow = "#2a3132";
const autum = "#763626";

export const BackgroudImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  opacity: 0.7;
  position: absolute;
  h2 {
    display: none;
  }

  p {
    display: none;
  }
`;
export const ImageContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid whitesmoke;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroudImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
      background-color: ${stone};
      border: 1px solid ${shadow};

      h2 {
        margin: 0 6px 0;
        font-size: 22px;
        color: whitesmoke;
        display: block;
      }
      p {
        font-weight: lighter;
        font-size: 16px;
        display: block;
        color: whitesmoke;
      }
    }
  }
  &.large {
    height: 380px;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;
