import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

interface Product {
  id: number;
  count: number;
  price: number;
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
    addProduct: (
      state,
      action: PayloadAction<{ id: number; price: number }>
    ) => {
      const { id, price } = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === id
      );
      if (existingProduct) {
        existingProduct.count += 1;
      } else {
        state.products.push({ id, count: 1, price });
      }
    },
    decrementProduct: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === productId
      );
      if (existingProduct) {
        if (existingProduct.count > 1) {
          existingProduct.count -= 1;
        } else {
          state.products = state.products.filter(
            (product) => product.id !== productId
          );
        }
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
    clearCart: (state) => {
      state.products = [];
    },
  },
});

export const selectProductExists = (state: RootState, productId: number) =>
  state.shoppingCart.products.some((product) => product.id === productId);

export const {
  addProduct,
  decrementProduct,
  removeProduct,
  updateProductCount,
  clearCart,
} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
