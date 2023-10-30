import React from 'react';

import Header from '@/pages/main/component/Header';
import Login from '@/pages/main/component/Login';

import style from './index.sass';
import ScrollStore from '@/pages/main/auditScroll';

// main page
const Main = (props: { children: React.ReactNode }) => {
  const { updateScrollOffsetY } = ScrollStore();

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {};

  return (
    <div className={style.wh} onScroll={onScroll}>
      <Header />
      <Login />
      <main className={style['main-container']}>{props.children}</main>
    </div>
  );
};

export default Main;
