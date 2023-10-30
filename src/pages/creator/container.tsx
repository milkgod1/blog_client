import CreatorSideBar from '@/pages/creator/component/sidebar';
import React from 'react';

import style from '@/pages/creator/index.sass';

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CreatorSideBar />
      <div className={style['right-wrapper']}>{children}</div>
    </>
  );
};

export default Container;
