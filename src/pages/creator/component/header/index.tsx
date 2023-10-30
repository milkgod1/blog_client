import { BellFilled } from '@ant-design/icons';
import { Badge, Typography } from 'antd';

import Header from '@/component/css-component/header';

import { UserAvatar } from '@/component/user/DropdownAvatar';

import style from './index.sass';

/**
 * ICON Children (Left - Right)
 * @constructor
 */
const CreatorHeader = () => {
  return (
    <Header>
      <Typography.Title className={style.title} level={3}>
        Creator Center
      </Typography.Title>
      <div className={style['creator-header-right']}>
        <Badge
          count={50}
          overflowCount={99}
          size="small"
          className={style.badge}
        >
          <BellFilled style={{ fontSize: 25 }} />
        </Badge>
        <UserAvatar />
      </div>
    </Header>
  );
};

export default CreatorHeader;
