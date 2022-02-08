import React from "react";
import { useGlobalContext } from "../context";
import FavoritesModal from "../FavoritesModal/FavoritesModal";
import { Container, Grid, GridItem } from "./Favorites.styled";

const Favorites = () => {
  const {
    state: { favoritesList, showFavoritesModal },
    handleFavoritesItemClick,
  } = useGlobalContext();

  return (
    <Container>
      <Grid>
        {favoritesList &&
          favoritesList.map((item, index) => {
            return (
              <GridItem
                key={index}
                onClick={() => handleFavoritesItemClick(item.id)}
              >
                <img src={item.url} alt="" />
              </GridItem>
            );
          })}
      </Grid>
      {showFavoritesModal && <FavoritesModal />}
    </Container>
  );
};

export default Favorites;
