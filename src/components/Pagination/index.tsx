/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Pagination, PaginationProps } from 'antd';
import { PaginationProp } from 'src/types/Pagination';

function Paginations({ onChange, totalPages, currentPage }: PaginationProp) {
  const itemRender: PaginationProps['itemRender'] = (
    _,
    type,
    originalElement,
  ) => {
    if (type === 'prev') {
      return currentPage === 1 ? null : (
        <a className="text-black hover:text-black !h-8 ">Prev</a>
      );
    }
    if (type === 'next') {
      return currentPage === totalPages ? null : (
        <a className="text-black hover:text-black !h-8">Next</a>
      );
    }
    return originalElement;
  };
  return (
    <div>
      <Pagination
        className="my-16"
        itemRender={itemRender}
        total={totalPages}
        current={currentPage}
        onChange={onChange}
        pageSize={1}
        showSizeChanger={false}
        showQuickJumper={false}
      />
    </div>
  );
}

export default Paginations;
