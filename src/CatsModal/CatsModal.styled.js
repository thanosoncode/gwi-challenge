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
  background: white;
  display: flex;

  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  position: relative;
`;

export const CloseIcon = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  width: 300px;
  /* height: 300px; */

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 370px;
  h5 {
    font-size: 19px;
    margin-bottom: 10px;
  }
`;

export const InfoDiv = styled.div`
  width: 60%;
  margin: 0 auto;
`;
export const InfoItem = styled.div`
  display: flex;

  justify-content: space-between;
  margin-bottom: 4px;

  span {
    text-transform: capitalize;
  }

  span:last-child {
    font-weight: 500;
  }
`;

export const BreedsContainer = styled.div`
  padding: 20px 0;
  text-align: center;

  p {
    margin-bottom: 10px;
    font-weight: 500;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  span {
    padding: 5px 10px;
    background: black;
    color: white;
    border-radius: 999px;
    cursor: pointer;
    transition: 0.3s ease;
  }

  span:hover {
    opacity: 0.8;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;

  button:first-child {
    margin-bottom: 20px;
  }
  button {
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 9px 9px;
    width: 100%;
    justify-content: space-between;
    border-radius: 3px;
    cursor: pointer;
    background: transparent;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
