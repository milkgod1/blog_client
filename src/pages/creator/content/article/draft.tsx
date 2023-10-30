import { useCallback, useEffect } from 'react';
import style from './all.sass';
import { Dropdown, List, Menu } from 'antd';
import { SmallDashOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import creatorStore from '@/model/creator';
import { useQueryDraftList } from '@/api/graphqls/draft';

const Draft = () => {
  const { queryCreatorDraftList } = useQueryDraftList();

  const { creatorDrafts } = creatorStore();

  const IdsMenu = useCallback(
    ({ id }: { id: string }) => (
      <Menu
        items={[
          {
            key: 'edit',
            label: <span className={style['creator-draft-lay']}>edit</span>,
            onClick: () => {},
          },
          {
            key: 'delete',
            label: <span className={style['creator-draft-lay']}>delete</span>,
            onClick: () => {},
          },
        ]}
      />
    ),
    [],
  );

  useEffect(() => {
    // initial
    queryCreatorDraftList();
  }, []);

  return (
    <div>
      <List
        dataSource={creatorDrafts?.drafts}
        renderItem={({ title, createTime, id }) => (
          <List.Item
            className={style.listItem}
            actions={[
              <Dropdown placement="bottom" overlay={<IdsMenu id={id} />}>
                <div className={style['action-button']}>
                  <SmallDashOutlined style={{ cursor: 'pointer' }} />
                </div>
              </Dropdown>,
            ]}
          >
            <div className={style.innerItem}>
              <div className={style.title}>{!title ? 'No title' : title}</div>
              <div className={style.time}>
                {dayjs(createTime).format('YYYY-MM-DD HH:mm')}
              </div>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Draft;
