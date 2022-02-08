const reducer = (state, action) => {
  if (action.type === "loading") {
    return { ...state, isLoading: true };
  }
  if (action.type === "fulfilled-cats") {
    return { ...state, catList: action.payload, isLoading: false };
  }
  if (action.type === "fulfilled-breeds") {
    return { ...state, breedList: action.payload };
  }
  if (action.type === "loadMore") {
    return { ...state, imagesAmount: state.imagesAmount + 10 };
  }
  if (action.type === "open-cats-modal") {
    const item = state.catList.find((item) => item.id === action.payload);
    return { ...state, selected: item, showCatsModal: true };
  }
  if (action.type === "close-cats-modal") {
    return { ...state, showCatsModal: false };
  }
  if (action.type === "add-to-favorites") {
    return {
      ...state,
      favoritesList: [...state.favoritesList, action.payload],
    };
  }
  if (action.type === "breed-selected-from-modal") {
    console.log(action.payload);
    return {
      ...state,
      breedId: action.payload,
      showCatsModal: false,
      showBreedsModal: true,
    };
  }
  if (action.type === "breed-selected-from-breed-view") {
    return { ...state, breedId: action.payload, showBreedsModal: true };
  }
  if (action.type === "breed-modal-image-click") {
    return {
      ...state,
      showBreedsModal: false,
      selected: action.payload,
      showCatsModal: true,
    };
  }
  if (action.type === "favorite-item-click") {
    return { ...state, favoriteId: action.payload, showFavoritesModal: true };
  }
  if (action.type === "remove-from-favorites") {
    return {
      ...state,
      favoritesList: state.favoritesList.filter(
        (item) => item.id !== state.favoriteId
      ),
      favoriteId: null,
      showFavoritesModal: false,
    };
  }
  if (action.type === "close-favorite-modal") {
    return { ...state, showFavoritesModal: false };
  }
  return state;
};

export default reducer;
