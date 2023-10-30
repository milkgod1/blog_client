import { MenuProps } from 'antd';
import style from './index.sass';

export const inputWidth = 240;
export const menuItem: MenuProps['items'] = [
  {
    label: 'Main',
    key: 'Main',
  },
  {
    label: 'Spot',
    key: 'Spot',
  },
  {
    label: 'Course',
    key: 'Course',
  },
  {
    label: 'Event',
    key: 'Event',
  },
];

export const layMenuItem: MenuProps['items'] = [
  {
    label: <span className={style['lay-menu']}>Main</span>,
    key: 'Main',
  },
  {
    label: <span className={style['lay-menu']}>Spot</span>,
    key: 'Spot',
  },
  {
    label: <span className={style['lay-menu']}>Course</span>,
    key: 'Course',
  },
  {
    label: <span className={style['lay-menu']}>Course</span>,
    key: 'Event',
  },
];

export const search_history = 'SEARCH_HISTORY';
