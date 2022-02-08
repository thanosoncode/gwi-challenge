import React from "react";
import BreedsModal from "../BreedsModal/BreedsModal";
import { useGlobalContext } from "../context";
import { Container, Grid, GridItem } from "./Breeds.styled";

const Breeds = () => {
  const {
    state: { breedList, showBreedsModal },

    handleBreedClick,
  } = useGlobalContext();

  return (
    <Container>
      <Grid>
        {breedList.map((item, index) => {
          const { image, name } = item;

          return (
            <GridItem
              key={index}
              onClick={() => {
                handleBreedClick(item);
              }}
            >
              <img src={image?.url} alt={name} />
              <p>{name}</p>
            </GridItem>
          );
        })}
      </Grid>
      {showBreedsModal && <BreedsModal />}
    </Container>
  );
};

export default Breeds;
