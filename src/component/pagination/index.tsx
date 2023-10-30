import { Pagination } from 'antd';
import React from 'react';

export interface PaginationProps {
  pageSize?: number;
  total?: number;
  onChange?: (page: number, pageSize: number) => void;
  ContainerStyle?: React.CSSProperties;
  ContainerClassName?: string;
  paginationStyle?: React.CSSProperties;
  paginationClassName?: string;
}

const CustomerPagination = ({
  pageSize,
  total,
  onChange,
  ContainerStyle,
  ContainerClassName,
  paginationStyle,
  paginationClassName,
}: PaginationProps) => {
  return (
    <div className={ContainerClassName} style={ContainerStyle}>
      <Pagination
        className={paginationClassName}
        style={paginationStyle}
        defaultCurrent={1}
        defaultPageSize={pageSize ?? 10}
        onChange={onChange}
        total={total}
      />
    </div>
  );
};

export default CustomerPagination;
