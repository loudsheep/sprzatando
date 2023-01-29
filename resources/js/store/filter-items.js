import { createSlice } from "@reduxjs/toolkit";

const initialCartItemState = { categories: [], cities: [], prices: [] };

const filterItemsSlice = createSlice({
  name: "filter items slice",
  initialState: initialCartItemState,
  reducers: {
    addFilterItems(state, action) {
      const { categories, cities, prices } = action.payload;
      categories.forEach((category) => {
        const existingCategory = state.categories.find(
          (stateCategory) => stateCategory === category
        );
        if (!existingCategory) {
          state.categories.push(category);
        } else {
          return;
        }
      });

      cities.forEach((city) => {
        const existingCity = state.cities.find(
          (stateCity) => stateCity === city
        );
        if (!existingCity) {
          state.cities.push(city);
        } else {
          return;
        }
      });

      prices.forEach((price) => {
        const existingPrices = state.prices.find(
          (statePrice) => statePrice === price
        );
        if (!existingPrices) {
          state.prices.push(price);
        } else {
          return;
        }
      });
    },
  },
});

export const filterItemsActions = filterItemsSlice.actions;
export default filterItemsSlice.reducer;
