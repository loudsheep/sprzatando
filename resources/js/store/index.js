import { configureStore } from "@reduxjs/toolkit";
import filterItemsReducer from "./filter-items";

const store = configureStore({
  reducer: { filterItems: filterItemsReducer },
});

export default store;
