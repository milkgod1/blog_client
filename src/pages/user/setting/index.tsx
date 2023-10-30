import React from 'react';

import Selection from '@/pages/user/setting/Selection';
import SettingNav from '@/pages/user/setting/SettingNav';

import style from './index.sass';

const SettingView = (props: { children: React.ReactNode }) => {
  return (
    <div>
      <SettingNav />
      <div className={style['setting-view']}>
        <Selection />
        <div className={style['setting-container']}>{props.children}</div>
      </div>
    </div>
  );
};

export default SettingView;
