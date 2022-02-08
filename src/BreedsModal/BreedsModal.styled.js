import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  padding: 10px;
  border-radius: 5px;

  background: white;
  max-width: 380px;
  text-align: center;

  h5 {
    margin-bottom: 10px;
    font-size: 22px;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }

  div {
    width: 100px;
    height: 100px;
    cursor: pointer;

    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: 0.3s ease;
  }

  img:hover {
    opacity: 0.9;
    transform: scale(1.1);
  }
`;
