import { Avatar, Menu, Typography } from 'antd';
import { ContainerOutlined, HomeFilled } from '@ant-design/icons';
import { history } from 'umi';

import style from './index.sass';
import { useModel } from '@@/plugin-model/useModel';
import { Icons } from '@/assets/icon';

const content = '/creator/content';
const data = '/creator/data';
const go = (s: string) => {
  return () => {
    history.push(s);
  };
};

const CreatorSideBar = () => {
  const { initialState } = useModel('@@initialState');

  return (
    <div className={style.sidebar}>
      <div className={style.info}>
        <Avatar
          src={initialState?.currentUser?.avatar ?? Icons.defaultAvatar}
          size="large"
        />
        <Typography.Title className={style.title} level={3}>
          {initialState?.currentUser?.userName}
        </Typography.Title>
      </div>
      <Menu
        mode="inline"
        items={[
          {
            key: 'main',
            label: 'main',
            icon: <HomeFilled />,
            onClick: go('/'),
          },
          {
            key: 'content',
            label: 'content manager',
            icon: <ContainerOutlined />,
            children: [
              {
                key: 'article',
                label: 'article manager',
                onClick: go('/creator/content/article'),
              },
              {
                key: 'column',
                label: 'column manager',
              },
              {
                key: 'spot',
                label: 'spot manager',
                onClick: go('/creator/content/spot'),
              },
            ],
          },
          {
            key: 'data',
            label: 'data statistic',
            icon: <ContainerOutlined />,
            children: [
              {
                key: 'content-data',
                label: 'content',
                onClick: go('/creator/data/content'),
              },
              {
                key: 'subscribe',
                label: 'subscriber',
                onClick: go('/creator/data/follower'),
              },
            ],
          },
          {
            key: 'event',
            label: 'event',
            icon: <ContainerOutlined />,
            children: [
              {
                key: 'creator-event',
                label: 'creator event',
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default CreatorSideBar;
