import { create } from "zustand";

interface LikedItems {
  likes: number[];
  addLikedItem: (id: number) => void;
  removeLikedItem: (id: number) => void;
  setLikedItem: (items: number[]) => void;
}

const useLikedItems = create<LikedItems>((set) => ({
  likes: [],
  setLikedItem: (likes: number[]) => set(() => ({ likes })),
  addLikedItem: (id: number) =>
    set((state) => ({ likes: [...state.likes, id] })),
  removeLikedItem: (id: number) =>
    set((state) => ({ likes: state.likes.filter((like) => like !== id) })),
}));

export default useLikedItems;
