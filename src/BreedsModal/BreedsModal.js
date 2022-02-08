import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import { ModalContainer, Modal } from "./BreedsModal.styled";

const BreedsModal = () => {
  const {
    state: { breedId },
    handleBreedImageClick,
  } = useGlobalContext();

  const apiKey = "263165c6-7725-4722-a2ed-b4ab05df4364";
  const url = `https://api.thecatapi.com/v1/images/search/?breed_id=${breedId}&limit=10`;

  const [breedItems, setBreedItems] = useState([]);

  useEffect(() => {
    fetch(url, {
      headers: {
        "x-api-key": apiKey,
      },
    })
      .then((res) => res.json())
      .then((data) => setBreedItems(data));
  }, [breedId, url]);

  return (
    <ModalContainer>
      <Modal>
        <h5>{breedItems && breedItems[0]?.breeds[0]?.name}</h5>
        <section>
          {breedItems &&
            breedItems.map((item, index) => {
              return (
                <div key={index} onClick={() => handleBreedImageClick(item)}>
                  <img src={item.url} alt="" />
                </div>
              );
            })}
        </section>
      </Modal>
    </ModalContainer>
  );
};

export default BreedsModal;
