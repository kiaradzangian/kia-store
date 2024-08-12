import { create } from 'zustand';

export const useStore = create((set) => ({
  bears: 0,
  product: [],
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  addProductToCart: (product) => set((state) => ({ product: [...state.product, product] })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));
