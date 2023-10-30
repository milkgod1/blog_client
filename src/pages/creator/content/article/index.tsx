import React from 'react';
import CreatorPagination from '@/pages/creator/component/pagination';

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <CreatorPagination />
    </>
  );
}
