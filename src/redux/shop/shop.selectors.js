import { createSelector } from "reselect";

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5,
// };

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.values(collections)
  //   (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) =>
      //If data is in object format
      collections[collectionUrlParam]

    //If data is in array, we use this below method
    // collections.find(
    //   (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    // )
  );