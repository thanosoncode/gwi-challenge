import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  column-gap: 20px;
  row-gap: 40px;
  justify-content: center;
  padding: 20px 40px;
  color: ${({ theme }) => theme.accent};
`;

export const GridItem = styled(motion.div)`
  width: 200px;
  height: 200px;
  text-align: center;

  p {
    font-weight: 600;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
