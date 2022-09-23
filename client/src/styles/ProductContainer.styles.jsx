import styled from "styled-components";

const stone = "#336b87";
const mist = "#90afc5";
const shadow = "#2a3132";
const autum = "#763626";

export const Title = styled.p``;
export const Price = styled.p``;

export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  opacity: 0.7;
  position: absolute;
  ${Title} {
    position: relative;
    top: -85%;
    padding: 5px;
    border: 2px solid whitesmoke;
    border-top: none;
    background-color: ${shadow};
    color: whitesmoke;
  }

  ${Price} {
    position: relative;
    top: 85%;
    font-weight: bold;
    padding: 5px;
    border: 2px solid whitesmoke;
    border-bottom: 2px solid whitesmoke;
    background-color: ${shadow};
    color: whitesmoke;
  }
`;
