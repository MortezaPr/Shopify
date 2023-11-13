import { create } from "zustand";

interface SidebarToggle {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useSidebarToggle = create<SidebarToggle>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSidebarToggle;
