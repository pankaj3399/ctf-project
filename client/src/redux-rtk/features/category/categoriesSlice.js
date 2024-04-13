import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  selectedCategory: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    chatLogs: (state, action) => {
      // console.log(action.payload);
      state.chats = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { chatLogs, setSelectedCategory, setCategories } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
