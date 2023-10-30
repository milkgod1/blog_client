import create from 'zustand';
import { rejectCatch } from '@/util/promiseWrapper';
import { getEditorById } from '@/api/draft';

interface EditorStore {
  savingStatus: 'saving' | 'pending' | 'error' | 'success';
  editor: Draft.Editor & {
    fetchingStatus: boolean;
  };
  success: () => void;
  saving: () => void;
  pending: () => void;
  error: () => void;
  fetchEditor: (aid: number) => Promise<any>;
  updateEditor: (update: Partial<Draft.Editor>) => void;
}

const editorStore = create<EditorStore>((set, get) => ({
  savingStatus: 'pending',
  editor: { fetchingStatus: true },
  success: () => set((state) => ({ ...state, savingStatus: 'success' })),
  saving: () => set((state) => ({ ...state, savingStatus: 'saving' })),
  pending: () => set((state) => ({ ...state, savingStatus: 'pending' })),
  error: () => set((state) => ({ ...state, savingStatus: 'error' })),
  fetchEditor: async (aid: number) => {
    const { value } = await rejectCatch(getEditorById(aid));
    if (!value) {
      return set((state) => ({ ...state, editor: { fetchingStatus: false } }));
    }
    if (value) {
      set((state) => ({
        ...state,
        editor: { ...value, fetchingStatus: true },
      }));
    }
  },
  updateEditor: (update) => {
    set((state) => ({
      ...state,
      editor: {
        ...state.editor,
        ...update,
      },
    }));
  },
}));

export default editorStore;
