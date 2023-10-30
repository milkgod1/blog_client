import { useLazyQuery, useQuery } from '@apollo/client';
import {
  getDraftList,
  getDraftPageByQuery,
  getEditorById,
} from '@/api/graphqls/draft/gql';
import { message } from 'antd';
import editorStore from '@/model/editor';
import creatorStore from '@/model/creator';

export const useFetchEditor = () => {
  const [fetchFunction, { data, loading, error }] = useLazyQuery<
    Record<'getEditor', Draft.Editor>,
    GqlWrapperInput<string>
  >(getEditorById);
  const { updateEditor } = editorStore();

  const fetchEditor = (id: string) => {
    fetchFunction({
      variables: {
        input: id,
      },
    }).then((e) => {
      const v = e.data?.getEditor;
      console.log(e);
      if (v) {
        updateEditor(v);
      }
    });
  };

  return {
    fetchEditor,
    editorContent: data,
    fetchEditorError: error,
    fetchEditorLoading: loading,
  };
};

export const useFetchDraftList = () => {
  const { data, loading, error } =
    useQuery<Record<'getDraftList', Draft.DraftQueryResult>>(getDraftList);

  if (error) {
    message.error('network error', 1.5);
  }

  return {
    draftList: data,
    listFetchError: error,
    listFetchLoading: loading,
  };
};

export const usePublish = (editor: Draft.Editor) => {
  const { data, error } = useQuery<
    Record<'publishDraft', number>,
    GqlWrapperInput<Draft.Editor>
  >(getEditorById, {
    variables: {
      input: {
        ...editor,
      },
    },
  });

  return {
    data,
    error,
  };
};

export const useQueryDraftList = () => {
  const [fetchFunction, { data, error, loading }] = useLazyQuery<
    Record<'draftQuery', Draft.DraftQueryResult>,
    GqlWrapperInput<Draft.DraftQuery>
  >(getDraftPageByQuery);

  const { updateDraftList, creatorQueryTitle } = creatorStore();
  const queryCreatorDraftList = (query?: Draft.DraftQuery) => {
    fetchFunction({
      variables: {
        input: {
          ...query,
          title: creatorQueryTitle,
        },
      },
    }).then((result) => {
      const draftResult = result.data?.draftQuery;
      if (draftResult) {
        console.log(draftResult);
        updateDraftList(draftResult);
      }
    });
  };

  return {
    queryCreatorDraftList,
    listFetchLoading: loading,
    listFetchError: error,
  };
};
