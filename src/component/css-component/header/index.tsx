import React from 'react';
import style from './index.sass';

interface HeaderProps {
  children?: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <a href="/" className={style['main-href']}>
          <img
            src={
              'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg'
            }
            alt={'Y'}
            className={style.img}
          />
        </a>
        <nav className={style['nav-list']}>{children}</nav>
      </div>
    </header>
  );
};

export default Header;
