import { LeftOutlined } from '@ant-design/icons';
import { Link } from 'umi';

import style from './index.sass';

const SettingNav = () => {
  return (
    <nav className={style.nav}>
      <Link to="/" className={style.inner}>
        <LeftOutlined />
        <span>Return to Personal Main Page</span>
      </Link>
    </nav>
  );
};

export default SettingNav;
