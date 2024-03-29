import styled from "styled-components";

export const StyledServicePageHero = styled.div<any>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 75vh;
  padding: 1em;
  box-sizing: border-box;
  color: black;
  background: url(${({ image }) => image}) center center no-repeat;
  background-size: cover;
  opacity: 0.9;
`;

export const tagStyle = {
  border: "1px solid white",
  fontSize: "18px",
  padding: "8px",
  margin: "5px",
  fontWeight: "600"
};
