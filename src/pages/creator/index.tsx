import React from 'react';
import CreatorHeader from '@/pages/creator/component/header';

import style from './index.sass';
import CreatorSideBar from '@/pages/creator/component/sidebar';

// maybe need to write a component because it is same as page main structure and stylesheet
const CreatorPage = ({ children }: { children: React.ReactNode }) => {
  console.log(children);
  return (
    <div className={style.wh}>
      <CreatorHeader />
      <main className={style['main-container']}>{children}</main>
    </div>
  );
};

export default CreatorPage;
