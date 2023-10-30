import CustomerPagination, { PaginationProps } from '@/component/pagination';
import style from './index.sass';

const CreatorPagination = ({
  pageInfo,
  onChange,
}: {
  pageInfo?: Common.Page;
  onChange?: PaginationProps['onChange'];
}) => {
  return pageInfo && pageInfo.count > 10 ? (
    <CustomerPagination
      total={pageInfo?.count}
      pageSize={pageInfo?.size}
      onChange={onChange}
      ContainerClassName={style['creator-pagination']}
    />
  ) : (
    <></>
  );
};

export default CreatorPagination;
