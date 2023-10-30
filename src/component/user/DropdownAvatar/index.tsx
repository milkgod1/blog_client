import { Avatar, Divider, Dropdown, Menu } from 'antd';
import {
  ContainerOutlined,
  EditOutlined,
  LikeOutlined,
  PoweroffOutlined,
  SettingOutlined,
  StarOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Icons } from '@/assets/icon';
import React from 'react';
import { useModel } from '@@/plugin-model/useModel';

import style from './index.sass';

export const UserAvatar = ({ size }: { size?: number }) => {
  const { initialState } = useModel('@@initialState');
  return (
    <Dropdown
      trigger={['click']}
      overlay={
        <Menu
          items={[
            {
              label: <span>write article</span>,
              icon: <EditOutlined />,
              key: 'edit',
              style: { marginTop: 10 },
            },
            {
              label: <span>draft box</span>,
              icon: <ContainerOutlined />,
              key: 'draft',
            },
            {
              label: <Divider className={style.divider} />,
              key: 'divider1',
              disabled: true,
              style: { cursor: 'pointer', padding: 0 },
            },
            {
              label: <span>main page</span>,
              icon: <UserOutlined />,
              key: 'personal',
            },
            {
              label: <span>like</span>,
              icon: <LikeOutlined />,
              key: 'like',
            },
            {
              label: <span>subscribe</span>,
              icon: <StarOutlined />,
              key: 'subscribe',
            },
            {
              label: <span>setting</span>,
              icon: <SettingOutlined />,
              key: 'setting',
            },
            {
              label: <Divider className={style.divider} />,
              key: 'divider2',
              disabled: true,
              style: { cursor: 'pointer', padding: 0 },
            },
            {
              label: <span>quit</span>,
              icon: <PoweroffOutlined />,
              key: 'quit',
              style: { marginBottom: 10 },
            },
          ]}
        />
      }
    >
      <Avatar
        className={style.avatar}
        size={size}
        src={initialState?.currentUser?.avatar ?? Icons.defaultAvatar}
      />
    </Dropdown>
  );
};
