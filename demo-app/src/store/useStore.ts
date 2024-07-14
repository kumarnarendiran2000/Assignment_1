import { create } from 'zustand';

interface StoreState {
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
  checkLoginStatus: () => void;
  logout: () => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
  username: string;
  password: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  name: string;
  email: string;
  message: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setMessage: (message: string) => void;
  resetForm: () => void;
}

const useStore = create<StoreState>((set) => ({
  isLoggedIn: false, // Default to false
  setIsLoggedIn: (loggedIn) => {
    set({ isLoggedIn: loggedIn });
    if (loggedIn) {
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      localStorage.removeItem('isLoggedIn');
    }
  },
  checkLoginStatus: () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    set({ isLoggedIn });
  },
  logout: () => {
    localStorage.removeItem('isLoggedIn');
    set({ isLoggedIn: false });
  },
  currentPage: 'Home',
  setCurrentPage: (page) => set({ currentPage: page }),
  username: '',
  password: '',
  setUsername: (username) => set({ username }),
  setPassword: (password) => set({ password }),
  name: '',
  email: '',
  message: '',
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setMessage: (message) => set({ message }),
  resetForm: () => set({ name: '', email: '', message: '' }),
}));

export default useStore;
