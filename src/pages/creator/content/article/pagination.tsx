import creatorStore from '@/model/creator';
import { useMemo } from 'react';
import { useQueryDraftList } from '@/api/graphqls/draft';
import CreatorPagination from '@/pages/creator/component/pagination';

const ArticlePagination = () => {
  const { creatorDrafts, creatorQueryTitle } = creatorStore();
  const pageInfo = useMemo(
    () => creatorDrafts?.pageInfo,
    [creatorDrafts, creatorDrafts?.pageInfo],
  );

  const { queryCreatorDraftList } = useQueryDraftList();

  const onChange = (page: number, pageSize: number) => {
    queryCreatorDraftList({
      page: page - 1,
      size: pageSize,
      title: creatorQueryTitle,
    });
  };

  return <CreatorPagination pageInfo={pageInfo} onChange={onChange} />;
};

export default ArticlePagination;
