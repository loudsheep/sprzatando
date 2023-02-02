import { createSlice } from "@reduxjs/toolkit";

const initialCartItemState = { categories: [], cities: [], prices: [0, 0] };

const filterItemsSlice = createSlice({
  name: "filter items slice",
  initialState: initialCartItemState,
  reducers: {
    addFilterItems(state, action) {
      const { categories, cities, minPrice, maxPrice } = action.payload;

      if (categories !== state.categories) {
        if (categories.length > 0) {
          state.categories.length = 0;
          categories.forEach((category) => state.categories.push(category));
        }
      }

      if (cities !== state.cities) {
        if (cities.length > 0) {
          state.cities.length = 0;
          cities.forEach((city) => state.cities.push(city));
        }
      }

      if (minPrice) {
        if (minPrice !== state.prices[0]) {
          state.prices[0] = minPrice;
        }
      }

      if (maxPrice) {
        if (maxPrice !== state.prices[1]) {
          state.prices[1] = maxPrice;
        }
      }
    },
  },
});

export const filterItemsActions = filterItemsSlice.actions;
export default filterItemsSlice.reducer;
