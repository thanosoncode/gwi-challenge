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
  justify-content: center;
  padding: 20px 40px;

  gap: 20px;
`;

export const GridItem = styled(motion.div)`
  width: 200px;
  height: 200px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Button = styled.button`
  display: block;
  padding: 10px 15px;
  flex: 0;
  width: 200px;
  margin: 40px auto;
  color: ${({ theme }) => theme.accent};
  background: ${({ theme }) => theme.bg2};
  border: 1px solid ${({ theme }) => theme.accent};
  transition: 0.3s ease;
  font-weight: 600;

  &:hover {
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => theme.accent};
    border: 1px solid ${({ theme }) => theme.accent};
  }
`;
