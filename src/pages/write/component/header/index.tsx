import React, { useCallback, useEffect, useState } from 'react';
import {
  Button,
  Form,
  Input,
  message,
  Popover,
  Radio,
  Select,
  Upload,
} from 'antd';
import style from './index.sass';
import {
  CheckOutlined,
  LoadingOutlined,
  PlusOutlined,
  SwapOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import { RcFile, UploadProps } from 'antd/es/upload';
import { UploadFile } from 'antd/es/upload/interface';
import { history as UHistory, useLocation } from 'umi';
import { uploadArticleCover } from '@/api/article/article';
import editorStore from '@/model/editor';
import UploadPicture from '@/component/upload';
import { useSave } from '@/pages/write/component/util/save';
import { UserAvatar } from '@/component/user/DropdownAvatar';

const { Option } = Select;

const kind = [
  'Front-end',
  'Backend',
  'Algorithm',
  'Android',
  'iOS',
  'Machine Learning',
  'devtools',
  'Reading',
];

const TitleInput = () => {
  const location = useLocation();

  const { savingStatus, editor } = editorStore();
  const { quickSave, debounceSave } = useSave();

  const [editorTitle, setEditorTitle] = useState(editor.title);
  const [tag, setTag] = useState<string[] | null>(null);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  useEffect(() => {
    setTag(['Vue.js', 'React.js', 'JavaScript', 'WebSocket']);
  }, []);

  useEffect(() => {
    setEditorTitle(editor.title);
  }, [editor.title]);

  const upload: UploadProps['customRequest'] = (config) => {
    const formData = new FormData();
    formData.set('cover', config.file);
    if (location.pathname.split('/').at(-1)) {
      formData.set('aid', location.pathname.split('/').at(-1) as string);
    }
    uploadArticleCover(formData).then((value) => value.id);
  };

  const updateEditorAndSave = (update: Partial<Draft.Editor>) => {
    quickSave(update);
  };

  const title = <h1 style={{ margin: 0 }}>Submit Article</h1>;

  const content = (
    <Form
      className={style.form}
      style={{ maxWidth: 700 }}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
    >
      <Form.Item label="kind" name="kind" rules={[{ required: true }]}>
        <Radio.Group
          buttonStyle="solid"
          onChange={(e) => {
            e.preventDefault();
            updateEditorAndSave({
              kindName: e.target.value,
            });
          }}
        >
          {kind.map((item, index) => (
            <Radio.Button key={index} className={style.group} value={item}>
              {item}
            </Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>
      <Form.Item
        wrapperCol={{ span: 14 }}
        label="tag"
        name="tag"
        rules={[{ required: true }]}
      >
        <Select
          placeholder="Select a tag"
          onChange={(tag) => {
            updateEditorAndSave({
              tagName: tag,
            });
          }}
        >
          <Option className={style.tag}>Please Select One</Option>
          {tag
            ? tag.map((item, index) => (
                <Option key={index} value={item}>
                  {item}
                </Option>
              ))
            : null}
        </Select>
      </Form.Item>
      <Form.Item
        label="upload cover"
        name="upload"
        valuePropName="fileList"
        getValueFromEvent={(e: any) => {
          console.log('Upload event:', e);
          if (Array.isArray(e)) {
            return e;
          }
          return e && e.fileList;
        }}
      >
        <UploadPicture customUpload={upload} />
      </Form.Item>
    </Form>
  );

  const SaveStatus = (
    <>
      {savingStatus === 'saving' && (
        <>
          <LoadingOutlined />
          <span>Saving</span>
        </>
      )}
      {savingStatus === 'success' && (
        <>
          <CheckOutlined twoToneColor="#52c41a" />
          <span>Saving successfully</span>
        </>
      )}
      {savingStatus === 'error' && (
        <>
          <WarningOutlined />
          <span>Saving error</span>
        </>
      )}
    </>
  );

  return (
    <div className={style['editor-header']}>
      <Input
        size="large"
        placeholder="Enter Title here"
        bordered={false}
        className={style['title-input']}
        value={editorTitle}
        onChange={(event) => {
          setEditorTitle(event.target.value);
          debounceSave({
            title: event.currentTarget.value,
          });
        }}
      />
      <div className={style['save-button']}>
        <div className={style['save-status']}>{SaveStatus}</div>
        <Button>Draft Box</Button>
        <Popover
          placement="bottomLeft"
          title={title}
          content={content}
          trigger="click"
        >
          <Button type="primary">Submit</Button>
        </Popover>
        <SwapOutlined style={{ display: 'flex', alignItems: 'center' }} />
      </div>
      <div className={style.avatar}>
        <UserAvatar />
      </div>
    </div>
  );
};

export default TitleInput;
