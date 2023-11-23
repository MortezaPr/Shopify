import { create } from "zustand";

interface SearchToggle {
  isSearching: boolean;
  onSearch: () => void;
  onCloseSearch: () => void;
}

const useSearching = create<SearchToggle>((set) => ({
  isSearching: false,
  onSearch: () => set({ isSearching: true }),
  onCloseSearch: () => set({ isSearching: false }),
}));

export default useSearching;
