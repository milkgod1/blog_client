import { useMemo } from 'react';
import { useModel } from '@@/plugin-model/useModel';
import { Button, Card, Form, Input } from 'antd';

import style from './index.sass';
import UploadPicture, { UploadFunction } from '@/component/upload';

const { TextArea } = Input;

const Profile = () => {
  const { initialState } = useModel('@@initialState');

  const user = useMemo(
    () => initialState?.currentUser,
    [initialState?.currentUser],
  );

  const upload: UploadFunction = (config) => {};

  return (
    <Card title="Personal information" bordered={false}>
      <div className={style['user-info']}>
        <Form
          style={{ width: '60%' }}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          labelAlign="left"
          colon={false}
          className={style['save-form']}
        >
          <Form.Item
            name="username"
            label="username"
            rules={[{ required: true }]}
          >
            <Input showCount maxLength={20} defaultValue={user?.userName} />
          </Form.Item>
          <Form.Item name="career" label="career">
            <Input showCount maxLength={50} defaultValue={user?.career} />
          </Form.Item>
          <Form.Item name="company" label="company">
            <Input showCount maxLength={50} defaultValue={user?.userName} />
          </Form.Item>
          <Form.Item name="personal-page" label="personal page">
            <Input
              showCount
              maxLength={100}
              defaultValue={user?.personalPage}
            />
          </Form.Item>
          <Form.Item name="description" label="description">
            <TextArea
              allowClear
              showCount
              maxLength={100}
              defaultValue={user?.description}
              autoSize={{ minRows: 6 }}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6 }}>
            <Button type="primary" htmlType="submit">
              Save Change
            </Button>
          </Form.Item>
        </Form>
        <div className={style['upload-container']}>
          <div className={style.upload}>
            <div style={{ width: 110 }}>
              <UploadPicture customUpload={upload} />
            </div>
            <span style={{ fontSize: 20, lineHeight: '20px' }}>My avatar</span>
            <span className={style.description}>
              Support jpg/png, size must smaller than 2MB
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Profile;
