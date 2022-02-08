import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);

  padding: 20px 40px;
  gap: 10px;
`;

export const GridItem = styled.div`
  width: 200px;
  height: 200px;

  img {
    width: 100%;
    display: block;
    height: 100%;
    object-fit: cover;
  }
`;
