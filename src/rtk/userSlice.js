import { createSlice } from "@reduxjs/toolkit";

//El reductor cambia el estado, lo actualiza

const initialState = {
  email: "",
  categories: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Son funciones
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setEmail, setCategories } = userSlice.actions;
export default userSlice.reducer;
