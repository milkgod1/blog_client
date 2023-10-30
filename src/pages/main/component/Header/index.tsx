import React, { useRef, useState } from 'react';
import {
  Button,
  Dropdown,
  Input,
  InputRef,
  List,
  Menu,
  MenuProps,
  Space,
} from 'antd';
import { CaretDownOutlined, DownOutlined } from '@ant-design/icons';
import { animated, useSpring } from 'react-spring';
import _ from 'lodash';

import loginStore from '@/model/login';
import { useModel, Link, useLocation } from 'umi';
import { useLocalStorage } from '@/hooks/cache/localStorage';
import style from './index.sass';
import { UserAvatar } from '@/component/user/DropdownAvatar';
import {
  inputWidth,
  layMenuItem,
  menuItem,
  search_history,
} from '@/pages/main/component/Header/Const';
import ScrollStore from '@/pages/main/auditScroll';

const { Search } = Input;

const defaultMenuKey = (path: string) => {
  const splitPath = path.split('/').at(-1);
  switch (splitPath) {
    case '':
      return 'Main';
    case 'Spot':
      return 'Spot';
    case 'Course':
      return 'Course';
    case 'Event':
      return 'Event';
    default:
      return 'Main';
  }
};

const Header = ({ className }: { className?: string }) => {
  const location = useLocation();

  const [focus, setFocus] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const searchRef = useRef<InputRef | null>(null);
  const { initialState } = useModel('@@initialState');

  const { open } = loginStore();
  const { offsetY } = ScrollStore();

  const { store, update, remove } = useLocalStorage<string[]>({
    key: search_history,
    defaultValue: [],
  });

  const searchStyles = useSpring({
    width: focus ? inputWidth + 70 : inputWidth,
  });

  const onType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    console.log(value);
    setSearchInput(value);
  };
  const onFocus = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };
  const onSearch = (val: string) => {
    if (val === '') return;
    setSearchInput('');
    searchRef?.current?.blur();
    if (store) {
      update([val, ...store.slice(0, 5)]);
    } else {
      update([val]);
    }
  };
  // offsetY > 900 ? `${style.header}` : `${style.header} ${style.visible}`
  return (
    <div className={style['main-header']}>
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
          <nav className={style['nav-list']}>
            <Menu
              defaultSelectedKeys={[defaultMenuKey(location.pathname)]}
              className={style.menu}
              items={menuItem}
              mode="horizontal"
            />
            <Dropdown
              className={style['drop-menu']}
              arrow={true}
              placement="bottom"
              overlay={
                <Menu
                  items={layMenuItem}
                  defaultSelectedKeys={[defaultMenuKey(location.pathname)]}
                  mode="vertical"
                />
              }
            >
              <Space align="center">
                <span style={{ fontSize: 16, fontWeight: 500 }}>Main</span>
                <CaretDownOutlined />
              </Space>
            </Dropdown>
            <div className={style['rest-box']}>
              <div className={style['search-content']}>
                <animated.div className={style.left} style={searchStyles}>
                  <Search
                    ref={searchRef}
                    value={searchInput}
                    onChange={onType}
                    onFocus={onFocus}
                    onBlur={() => _.delay(onBlur, 100)}
                    onSearch={onSearch}
                    placeholder="search here"
                    allowClear
                    width={'100%'}
                  />
                  {store && (
                    <List
                      size="small"
                      style={{
                        display: focus ? 'block' : 'none',
                        backgroundColor: 'white',
                      }}
                      className={style['search-history']}
                      header={
                        <div className={style['history-header']}>
                          <span>Search history</span>
                          <Button
                            type="link"
                            onClick={(e) => {
                              e.preventDefault();
                              console.log('click');
                              remove();
                            }}
                          >
                            Clear
                          </Button>
                        </div>
                      }
                      dataSource={store}
                      bordered
                      renderItem={(item, index) => {
                        if (index >= 8) return;
                        return <List.Item>{item}</List.Item>;
                      }}
                    />
                  )}
                </animated.div>
                <div className={style.right}>
                  <Dropdown.Button
                    type="primary"
                    overlay={
                      <Menu
                        style={{
                          width: inputWidth / 1.5,
                        }}
                        items={[
                          {
                            label: 'send a spot',
                            key: 'SendSpot',
                          },
                          {
                            label: (
                              <Link to="/write/new">write an article</Link>
                            ),
                            key: 'WriteArticle',
                          },
                        ]}
                      />
                    }
                    icon={<DownOutlined />}
                  >
                    Create Center
                  </Dropdown.Button>
                </div>
              </div>
              {initialState?.currentUser ? (
                <UserAvatar />
              ) : (
                <Button onClick={open}>Login</Button>
              )}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
