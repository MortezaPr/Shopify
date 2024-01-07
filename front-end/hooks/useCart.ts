import { create } from "zustand";

interface Item {
  title: string;
  price: number;
  color: string;
  count: number;
  pic: string;
  id: number;
}

interface Cart {
  items: Item[];
  addItem: (item: Item) => void;
  editItem: (id: number, newItem: Item) => void;
  removeItem: (id: number) => void;
}

const useCart = create<Cart>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  editItem: (id, newItem) =>
    set((state) => ({
      items: state.items.map((item) => (item.id === id ? newItem : item)),
    })),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
}));

export default useCart;
