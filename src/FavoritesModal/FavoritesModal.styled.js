import styled from "styled-components";

export const Modal = styled.div`
  background: white;

  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  position: relative;
`;

export const ImageWrapper = styled.div`
  width: 100%;

  img {
    display: block;
    object-fit: center;
    width: 100%;
    height: 100%;
  }
`;

export const Buttons = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  display: flex;
  gap: 10px;

  button {
    background: none;
    border: 1px solid ${({ theme }) => theme.accent};
    padding: 4px 12px;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s ease;
    color: ${({ theme }) => theme.accent};
  }

  button:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
