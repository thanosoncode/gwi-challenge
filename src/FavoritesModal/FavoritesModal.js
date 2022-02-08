import React from "react";
import { useGlobalContext } from "../context";
import { ModalContainer, CloseIcon } from "../CatsModal/CatsModal.styled";
import { ImageWrapper, Modal, Buttons } from "./FavoritesModal.styled";
import { HiOutlineX } from "react-icons/hi";

const FavoritesModal = () => {
  const {
    state: { favoriteId, favoritesList },
    handleRemoveFromFavorites,
    handleCloseFavoriteModal,
  } = useGlobalContext();

  const selected = favoritesList.find((item) => item.id === favoriteId);

  return (
    <ModalContainer>
      <Modal>
        <CloseIcon onClick={handleCloseFavoriteModal}>
          <HiOutlineX />
        </CloseIcon>
        <Buttons>
          <button>Spin</button>
          <button onClick={handleRemoveFromFavorites}>Remove</button>
        </Buttons>
        <ImageWrapper>
          <img src={selected.url} alt="" />
        </ImageWrapper>
      </Modal>
    </ModalContainer>
  );
};

export default FavoritesModal;
