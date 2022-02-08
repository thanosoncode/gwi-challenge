import React from "react";
import BreedsModal from "../BreedsModal/BreedsModal";
import { useGlobalContext } from "../context";
import Spinner from "../Spinner/Spinner";
import { Container, Grid, GridItem } from "./Breeds.styled";
import { motion } from "framer-motion";
import Img from "react-cool-img";
import loadingImage from "../assets/images/loading.gif";
import errorImage from "../assets/images/error.gif";

const Breeds = () => {
  const {
    state: { breedList, showBreedsModal, isLoading, error },

    handleBreedClick,
  } = useGlobalContext();

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return "something went wrong";
  }
  if (breedList) {
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
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  delay: 0.3 * index,
                }}
                as={motion.div}
              >
                <Img
                  src={image?.url}
                  alt={name}
                  placeholder={loadingImage}
                  error={errorImage}
                />
                <p>{name}</p>
              </GridItem>
            );
          })}
        </Grid>
        {showBreedsModal && <BreedsModal />}
      </Container>
    );
  }
};

export default Breeds;
