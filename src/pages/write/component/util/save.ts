import _ from 'lodash';
import { useLocation } from 'umi';
import { saveDraft, updateDraft } from '@/api/draft';
import editorStore from '@/model/editor';
import { useCallback, useMemo } from 'react';

export const useSave = () => {
  const location = useLocation();

  const { saving, error, success, editor } = editorStore();

  const quickSave = useCallback(
    (item: Draft.Editor) => {
      saving();
      if (!/\/new/.test(location.pathname)) {
        if (editor.id || item.id) {
          updateDraft({ ...item, id: editor.id ?? item.id })
            .then(({ msg }) => success())
            .catch(() => error());
        } else {
          console.log('no-id');
        }
      } else {
        saveDraft({ ...item })
          .then(({ id }) => {
            success();
            history.replaceState(null, '', `/write/${id}`);
          })
          .catch(() => error());
      }
    },
    [editor.id],
  );

  const debounceSave = useMemo(() => _.debounce(quickSave, 1500), [quickSave]);

  return { quickSave, debounceSave };
};
