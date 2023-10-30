import { Input, Menu } from 'antd';
import React, { useEffect } from 'react';
import ExtendMenu from '@/component/menu/extend-menu';
import { SearchOutlined } from '@ant-design/icons';
import { history, useLocation } from 'umi';
import creatorStore from '@/model/creator';
import ArticlePagination from '@/pages/creator/content/article/pagination';

const ArticleNavigatorBar = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const { updateQueryTitle } = creatorStore();

  useEffect(() => {
    updateQueryTitle();
  }, [location.pathname]);

  return (
    <>
      <ExtendMenu
        mode="horizontal"
        style={{
          width: '60%',
          fontSize: 18,
        }}
        items={[
          {
            key: 'articles',
            label: 'articles',
          },
          {
            key: 'drafts',
            label: 'drafts',
            onClick: () => {
              history.push('/creator/content/article/drafts');
            },
          },
        ]}
        defaultSelectedKeys={[location.pathname.split('/').at(-1)!!]}
        extended={
          <Input
            style={{ width: 200 }}
            placeholder={'input the title keyword'}
            suffix={<SearchOutlined onClick={() => {}} />}
            onChange={(event) => {
              updateQueryTitle(event.currentTarget.value);
            }}
            onKeyDown={(event) => {
              if (event.code === 'enter') {
              }
            }}
          />
        }
      />
      {children}
      <ArticlePagination />
    </>
  );
};

export default ArticleNavigatorBar;
