import { create } from 'zustand';

interface UserState {
  name: string;
  age: number;
  mobileNumber: string;
  address: string;
  document: File | null;
  setUserDetails: (details: Partial<UserState>) => void;
  clearUserDetails: () => void;
}

const useUserStore = create<UserState>((set) => ({
  name: '',
  age: 0,
  mobileNumber: '',
  address: '',
  document: null,
  
  setUserDetails: (details) => set((state) => ({ ...state, ...details })),
  clearUserDetails: () => set({ name: '', age: 0, mobileNumber: '', address: '', document: null }),
}));

export default useUserStore;
