import { create } from "zustand";

interface Theme {
  theme: string;
  onDark: () => void;
  onLight: () => void;
}

const useTheme = create<Theme>((set) => ({
  theme: "light",
  onDark: () => set({ theme: "dark" }),
  onLight: () => set({ theme: "light" }),
}));

export default useTheme;
