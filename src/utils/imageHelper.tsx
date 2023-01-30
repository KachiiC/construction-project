import styled from "styled-components";

export const ResponsiveContainer = styled.div<any>`
  padding: 10px;
  margin: 10px;
  max-height: ${(props) => props.maxHeight}px;
  min-height: ${(props) => props.maxHeight}px;
`;

export const StaticImage = styled.div<any>`
  padding: 10px;
  width: ${(props) => props.width}px !important;
  height: ${(props) => props.height}px !important;

  img {
    width: 100%;
    height: auto;
    min-height: 100%;
  }
`;
