import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  offersArray: [],
  originalOffersArray: [],
  cityFilter: null,
  categoryFilter: null,
  priceFilter: [],
};

const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    setAllOffers(state, action) {
      const { offers } = action.payload;
      state.offersArray = offers;
      state.originalOffersArray = offers;
    },
    setCityFilter(state, action) {
      const { city } = action.payload;
      state.cityFilter = city;
    },
    setCategoryFilter(state, action) {
      const { category } = action.payload;
      state.categoryFilter = category;
    },
    setPriceFilter(state, action) {
      const { value } = action.payload;
      state.priceFilter = value;
    },
    filterOffers(state) {
      let filteredOffers = state.originalOffersArray;

      if (state.cityFilter) {
        filteredOffers = filteredOffers.filter(
          (offer) => offer.city === state.cityFilter
        );
      }

      if (state.categoryFilter) {
        filteredOffers = filteredOffers.filter(
          (offer) => offer.category === state.categoryFilter
        );
      }

      if (state.priceFilter.length > 0) {
        filteredOffers = filteredOffers.filter(
          (offer) =>
            offer.price >= state.priceFilter[0] &&
            offer.price <= state.priceFilter[1]
        );
      }

      state.offersArray = filteredOffers;
    },
  },
});

export const offersActions = offersSlice.actions;

export default offersSlice.reducer;