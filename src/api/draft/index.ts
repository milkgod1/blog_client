import { optionType, requestFactory, requestHeader } from '@/api/common';

const draftRequest = requestFactory<Article.Article>({
  prefix: '/api/draft',
});

// private
export const updateDraft = async (data: Draft.Editor, options?: optionType) => {
  return draftRequest<{ msg: string }>('/update', {
    method: 'POST',
    headers: requestHeader,
    body: JSON.stringify(data),
    ...options,
  });
};

export const saveDraft = async (data: Draft.Editor, options?: optionType) => {
  return draftRequest<{ id: BigInt }>('/new', {
    method: 'POST',
    headers: requestHeader,
    body: JSON.stringify(data),
    ...options,
  });
};

export const getEditorById = async (aid: number, options?: optionType) => {
  return draftRequest<Draft.Editor>(`/fetch/${aid}`, {
    ...options,
  });
};
