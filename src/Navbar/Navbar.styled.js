import styled from "styled-components";

export const Nav = styled.nav`
  background: ${({ theme }) => theme.bg};
  padding: 20px 40px;
`;
export const Center = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Li = styled.li`
  margin-right: 20px;
  color: ${({ pathname, name }) => (pathname === name ? "red" : "black")};
`;
