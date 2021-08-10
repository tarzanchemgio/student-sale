import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserByLogin } from "../thunks";
import { User, Product } from "../../models";

const initialUser: User = {
  id: 0,
  email: "",
  password: "",
  name: "",
  postedItems: [],
  purchasedItems: []
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState: initialUser,
  reducers: {
    addPostProduct: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      if (state.postedItems?.find((item) => item.id === product.id))
        state.postedItems.map((item) =>
          item.id === product.id ? product : item
        );
      else state.postedItems?.unshift(action.payload);
    },
    deletePostProduct: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      // const index = state.postedItems?.findIndex(
      //   (item) => item.id === product.id
      // );
      // if (index && index !== -1) state.postedItems?.splice(index, 1);
      state.postedItems = state.postedItems?.filter(
        (item) => item.id !== product.id
      );
    },
    updatePostProduct: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      state.postedItems = state.postedItems?.map((item) =>
        item.id === product.id ? product : item
      );
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserByLogin.fulfilled, (state, action) => {
      const user = action.payload;
      if (user) return { ...state, ...user };
      else return { ...state, ...initialUser };
    });
  }
});

export const userActions = userSlice.actions;
export default userSlice.reducer;