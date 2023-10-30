import {
  ProfileOutlined,
  SettingOutlined,
  SolutionOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';

import style from './index.sass';

const Selection = () => {
  return (
    <Menu
      className={style['select-bar']}
      items={[
        {
          icon: <SolutionOutlined />,
          key: 'information',
          label: 'Personal Information',
        },
        {
          icon: <SettingOutlined />,
          key: 'setting',
          label: 'Account Setting',
        },
        {
          icon: <ProfileOutlined />,
          key: 'resume',
          label: 'Resume',
        },
      ]}
    />
  );
};

export default Selection;
