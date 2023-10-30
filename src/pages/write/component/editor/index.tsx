import React, { useState, useEffect } from 'react';
import { history, useLocation, useParams } from 'umi';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import { IDomEditor, IEditorConfig } from '@wangeditor/editor';
import { List, Anchor } from 'antd';
import _ from 'lodash';

import style from './index.sass';
import '@wangeditor/editor/dist/css/style.css';
import editorStore from '@/model/editor';
import { useSave } from '@/pages/write/component/util/save';

const { Link } = Anchor;

type HeaderNode = {
  title: string;
  level: string;
  key: string | number;
  children?: HeaderNode[];
};
// '<h1>h1</h1><p>hello&nbsp;world</p><h2>h2</h2><p>hello&nbsp;world</p><h3>h3</h3><p>hello&nbsp;world</p><h4>h4</h4><p>hello&nbsp;world</p>' +
// '<h1>h1</h1><p>hello&nbsp;world</p><h3>h3</h3><p>hello&nbsp;world</p><h4>h4</h4><p>hello&nbsp;world</p><h2>h2</h2><p>hello&nbsp;world</p>' +
// '<h1>h1</h1><p>hello&nbsp;world</p><h3>h3</h3><p>hello&nbsp;world</p><h4>h4</h4><p>hello&nbsp;world</p><h3>h3</h3><p>hello&nbsp;world</p><h5>h5</h5><p>hello&nbsp;world</p><h2>h2</h2><p>hello&nbsp;world</p>',
const CusEditor = () => {
  const location = useLocation();
  const params = useParams<{ aid: string }>();
  const [editor, setEditor] = useState<IDomEditor | null>(null); // 存储 editor 实例

  const { debounceSave } = useSave();

  const { editor: editorContent } = editorStore();

  const toolbarConfig = {};
  const editorConfig: Partial<IEditorConfig> = {
    placeholder: '请输入内容...',
  };

  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  const onChange = (editor: IDomEditor) => {
    if (
      (/\/new/.test(location.pathname) && editor.getText().length) ||
      !/\/new/.test(location.pathname)
      // (!/\/new/.test(location.pathname) &&
      //   editorContent?.id &&
      //   !(editorContent?.content === editor.getHtml()))
    ) {
      // TODO: need prevent xss attacker
      debounceSave({
        id: params.aid,
        content: editor.getHtml(),
      });
    }
  };

  const isHeaderTag = (t: string) => /^h[1-6]$/.test(t);

  const render = () => {
    const domParser = new DOMParser();
    const d = domParser.parseFromString(editor?.getHtml() || '', 'text/html');
    const collection = Array.from(d.body.children);
    let headerNum = 0;
    collection.forEach((item, index) => {
      if (isHeaderTag(item.localName)) {
        item.id = `article-header-${headerNum++}`;
      }
    });
    return collection.reduce((prev, curr) => prev.concat(curr.outerHTML), '');
  };

  const getTitle = () => {
    if (!editor?.getHtml()) return;
    const domParser = new DOMParser();
    const d = domParser.parseFromString(editor.getHtml() || '', 'text/html');
    const collection = Array.from(d.body.children);
    const stack: HeaderNode[] = [];
    const list: HeaderNode[] = [];

    let headerNum = 0;
    let i = 0;
    for (; i < collection.length; i++) {
      const item = collection[i] as HTMLElement;
      const localName = item.localName;
      // /^h[1-6]$/.test(localName)
      if (isHeaderTag(localName)) {
        const node = {
          title: item.innerText,
          level: localName[1],
          key: headerNum++,
        };
        stack.push(node);
        list.push(node);
        i++;
        break;
      }
    }
    for (; i < collection.length; i++) {
      const item = collection[i] as HTMLElement;
      const localName = item.localName;
      if (isHeaderTag(localName)) {
        const thisLevel = localName[1];
        const newChild = {
          title: item.innerText,
          level: thisLevel,
          key: headerNum++,
        };
        let flag = false;
        for (let j = stack.length - 1; j >= 0; j--) {
          if (stack[j].level < thisLevel) {
            if (stack[j].children) {
              stack[j].children?.push(newChild);
            } else {
              stack[j].children = [newChild];
            }
            stack.push(newChild);
            flag = true;
            break;
          } else if (stack[j].level === thisLevel) {
            stack.pop();
            if (j) {
              const child = stack.at(-1);
              if (child) {
                if (child.children) {
                  child.children.push(newChild);
                } else {
                  child.children = [newChild];
                }
              }
            } else {
              // first index
              list.push(newChild);
            }
            stack.push(newChild);
            flag = true;
            break;
          } else {
            // 2 3 1
            stack.pop();
          }
        }
        if (!flag) {
          stack.push(newChild);
          list.push(newChild);
        }
      }
    }
    return _.cloneDeep(list);
  };

  const renderList = (item: HeaderNode[]) => {
    const arr: React.ReactNode[] = [];
    const renderChild = (child: HeaderNode[], dep = 0) => {
      for (let i = 0; i < child.length; i++) {
        arr.push(
          <List.Item
            style={{
              padding: '5px 8px',
              boxSizing: 'border-box',
              paddingLeft: dep * 17,
            }}
          >
            {child[i].title}
          </List.Item>,
        );
        if (!child[i].children) return;
        renderChild(child[i].children!, dep + 1);
      }
    };
    renderChild(item);
    return arr;
  };

  const renderAnchor = (item?: HeaderNode[]) => {
    if (!item) return;
    const renderChild = (child: HeaderNode[]) => {
      const arr: React.ReactNode[] = [];
      for (let i = 0; i < child.length; i++) {
        const ch = child[i];
        if (!ch.children) {
          arr.push(
            <Link
              key={ch.key}
              href={`#article-header-${ch.key}`}
              title={ch.title}
            />,
          );
          continue;
        }
        arr.push(
          <Link
            key={ch.key}
            href={`#article-header-${ch.key}`}
            title={ch.title}
          >
            {renderChild(ch.children!)}
          </Link>,
        );
      }
      return arr;
    };

    return renderChild(item);
  };

  return (
    <>
      <div className={style.editor}>
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="default"
          style={{ borderBottom: '1px solid #ccc' }}
        />
        <Editor
          defaultConfig={editorConfig}
          value={editorContent?.content}
          onCreated={setEditor}
          onChange={onChange}
          mode="default"
          style={{ flex: 1, overflowY: 'hidden' }}
        />
      </div>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: render(),
          }}
        />
        <div style={{ position: 'fixed', bottom: 300, right: 200 }}>
          <Anchor style={{ maxWidth: 200 }}>{renderAnchor(getTitle())}</Anchor>
        </div>
      </div>
    </>
  );
};

export default CusEditor;
