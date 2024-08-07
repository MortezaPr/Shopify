import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

interface Product {
  id: number;
  count: number;
}

interface ShoppingCartState {
  products: Product[];
}

const initialState: ShoppingCartState = {
  products: [],
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === productId
      );
      if (!existingProduct) {
        state.products.push({ id: productId, count: 1 });
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProductCount: (
      state,
      action: PayloadAction<{ id: number; count: number }>
    ) => {
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.count = action.payload.count;
      }
    },
  },
});

export const selectProductExists = (state: RootState, productId: number) =>
  state.shoppingCart.products.some((product) => product.id === productId);

export const { addProduct, removeProduct, updateProductCount } =
  shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
