import styled from "styled-components";

export const SmallImageOneDiv = styled.div<any>`
  grid-column: 1 / 3;
  grid-row: 10 / 13;
  background: url(${({ image }) => image}) no-repeat 50% 50% / cover;
  -ms-grid-column-span: 2;
  -ms-grid-column: 1;
  -ms-grid-row-span: 3;
  -ms-grid-row: 10;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const SmallImageTwoDiv = styled.div<any>`
  -ms-grid-column: 4;
  -ms-grid-column-span: 2;
  grid-column: 4 / 6;
  -ms-grid-row: 1;
  -ms-grid-row-span: 3;
  grid-row: 1 / 4;
  background: url(${({ image }) => image}) no-repeat 50% 50% / cover;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const SmallImageThreeDiv = styled.div<any>`
  -ms-grid-column: 11;
  -ms-grid-column-span: 2;
  grid-column: 11 / 13;
  -ms-grid-row: 10;
  -ms-grid-row-span: 3;
  grid-row: 10 / 13;
  background: url(${({ image }) => image}) no-repeat 50% 50% / cover;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const HeroMainImageDiv = styled.div<any>`
  -ms-grid-column: 6;
  -ms-grid-column-span: 5;
  grid-column: 6 / span 5;
  grid-row: 1 / -1;
  background: url(${({ image }) => image}) no-repeat 50% 50% / cover;

  @media screen and (max-width: 640px) {
    -ms-grid-row: 1;
    -ms-grid-row-span: 2;
    grid-row: 1 / -1;
    grid-column: 6 / span 7;
  }
`;
