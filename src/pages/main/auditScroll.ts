import create from 'zustand';

interface AuditScroll {
  offsetY: number;
  updateScrollOffsetY: (offset: number) => void;
}

const ScrollStore = create<AuditScroll>((set, get) => ({
  offsetY: 0,
  updateScrollOffsetY: (offset) => {
    set((state) => ({
      ...state,
      offsetY: offset,
    }));
  },
}));

export default ScrollStore;
