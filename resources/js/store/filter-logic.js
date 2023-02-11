import { createSlice } from "@reduxjs/toolkit";

const initialState = { offersArray: [], originalOffersArray: [] };

const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    setAllOffers(state, action) {
      const { offers } = action.payload;
      if (state.offersArray.length === 0) {
        offers.forEach((offer) => state.offersArray.push(offer));
      }
      if (state.originalOffersArray.length === 0) {
        offers.forEach((offer) => state.originalOffersArray.push(offer));
      }
    },

    //TODO: filtering by all criteria independently

    filterByCity(state, action) {
      const { city } = action.payload;
      state.offersArray = state.originalOffersArray;
      state.offersArray = state.offersArray.filter(
        (offer) => offer.city === city
      );
      console.log(city)
    },
    filterByCategory(state, action) {
      const { category } = action.payload;
      state.offersArray = state.originalOffersArray;
      state.offersArray = state.offersArray.filter(
        (offer) => offer.category === category
      );
    },
    filterByPrice(state, action) {
      const { value } = action.payload;
      state.offersArray = state.originalOffersArray;
      state.offersArray = state.offersArray.filter(
        (offer) => offer.price >= value[0] && offer.price <= value[1]
      );
    },
  },
});

export const offersActions = offersSlice.actions;

export default offersSlice.reducer;
