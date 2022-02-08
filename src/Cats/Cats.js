import React from "react";
import { useGlobalContext } from "../context";
import CatsModal from "../CatsModal/CatsModal";
import Spinner from "../Spinner/Spinner";
import { HomeContainer, Grid, GridItem, Button } from "./Cats.styled";

const Cats = () => {
  const {
    state: { catList, imagesAmount, showCatsModal, isLoading },
    handleCatImageClick,
    handleLoadMoreClick,
  } = useGlobalContext();

  if (isLoading) {
    return <Spinner />;
  }
  if (catList) {
    return (
      <HomeContainer>
        <Grid>
          {catList.slice(0, imagesAmount).map((item, indx) => {
            const { url, name, id } = item;
            return (
              <GridItem key={indx} onClick={() => handleCatImageClick(id)}>
                {name}
                <img src={url} alt="" />
              </GridItem>
            );
          })}
        </Grid>
        <Button onClick={handleLoadMoreClick}>load more</Button>
        {showCatsModal && <CatsModal />}
      </HomeContainer>
    );
  }
};

export default Cats;
