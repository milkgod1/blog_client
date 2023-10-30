import { requestFactory, optionType, requestHeader } from '@/api/common';

const articleRequest = requestFactory<Article.Article>({
  prefix: '/api/article/pub',
});

const articleAuthRequest = requestFactory<Article.Article>({
  prefix: '/api/article/pri',
});

const uploadRequest = requestFactory({
  prefix: '/api/upload',
});

// public
export const postArticle = async (
  data: Article.Article,
  options?: optionType,
) => {
  return articleAuthRequest<Draft.Editor>('/post', {
    method: 'POST',
    headers: requestHeader,
    body: JSON.stringify(data),
    ...options,
  });
};

export const uploadArticleCover = async (
  data: FormData,
  options?: optionType,
) => {
  return uploadRequest<{ id: string }>('/img', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: JSON.stringify(data),
    ...options,
  });
};
