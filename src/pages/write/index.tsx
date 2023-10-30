import CusEditor from '@/pages/write/component/editor';
import TitleInput from '@/pages/write/component/header';

import style from './index.sass';
import { IRouteComponentProps } from 'umi';
import editorStore from '@/model/editor';
import { useEffect } from 'react';
import { notification } from 'antd';
import { useFetchEditor } from '@/api/graphqls/draft';

type EditorRoute = Omit<IRouteComponentProps, 'match'> & {
  match: {
    params: {
      [key in string]: any;
    };
  };
};

const Editor = (props: EditorRoute) => {
  const aid = props.match.params?.aid;

  const { fetchEditor, fetchEditorError, editorContent } = useFetchEditor();
  const { editor } = editorStore();

  useEffect(() => {
    if (aid) {
      fetchEditor(aid);
    }
  }, []);

  useEffect(() => {
    if (!editor.fetchingStatus || fetchEditorError) {
      notification.error({
        message: 'can not fetch this article',
        duration: 1,
      });
    }
  }, [editor.fetchingStatus]);

  return (
    <div className={style.editor}>
      <TitleInput />
      <CusEditor />
    </div>
  );
};

export default Editor;
