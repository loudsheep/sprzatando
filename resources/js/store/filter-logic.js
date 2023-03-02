import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  offersArray: [],
  originalOffersArray: [],
  cityFilter: null,
  categoryFilter: null,
  priceFilter: [],
  currentPage: 1,
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
    setCurrentPage(state, action) {
      const { value } = action.payload;
      state.currentPage = value;
    },
    filterOffers(state) {
      let filteredOffers = state.originalOffersArray;

      if (state.cityFilter) {
        if (state.cityFilter === "Wybierz lokalizacje") {
          filteredOffers = filteredOffers;
        } else {
          filteredOffers = filteredOffers.filter(
            (offer) => offer.city === state.cityFilter
          );
        }
        state.currentPage = 1;
      }

      if (state.categoryFilter) {
        if (state.categoryFilter === "Wybierz rodzaj sprzątania") {
          filteredOffers = filteredOffers;
        } else {
          filteredOffers = filteredOffers.filter((offer) =>
            offer.category.includes(state.categoryFilter)
          );
        }
        state.currentPage = 1;
      }

      if (state.priceFilter.length > 0) {
        filteredOffers = filteredOffers.filter(
          (offer) =>
            offer.price >= state.priceFilter[0] &&
            offer.price <= state.priceFilter[1]
        );
        state.currentPage = 1;
      }

      state.offersArray = filteredOffers;
    },
  },
});

export const offersActions = offersSlice.actions;

export default offersSlice.reducer;
