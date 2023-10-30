import create from 'zustand';

interface CreatorStore {
  creatorDrafts?: Draft.DraftQueryResult;
  creatorQueryTitle?: string;
  updateDraftList: (drafts?: Draft.DraftQueryResult) => void;
  updateQueryTitle: (title?: string) => void;
}

const creatorStore = create<CreatorStore>((set, get) => ({
  updateDraftList: (drafts) => {
    set((state) => ({
      ...state,
      creatorDrafts: drafts,
    }));
  },
  updateQueryTitle: (title) => {
    if (title === '') {
      title = undefined;
    }
    set((state) => ({
      ...state,
      creatorQueryTitle: title,
    }));
  },
}));

export default creatorStore;
