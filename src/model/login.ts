import create from 'zustand';

interface LoginStore {
  status: 'open' | 'register' | 'close' | 'miss';
  open: () => void;
  close: () => void;
  register: () => void;
  miss: () => void;
}

const loginStore = create<LoginStore>((set, get) => ({
  status: 'close',
  open: () => set((state) => ({ status: 'open' })),
  close: () => set((state) => ({ status: 'close' })),
  register: () => set((state) => ({ status: 'register' })),
  miss: () => set((state) => ({ status: 'miss' })),
}));

export default loginStore;
