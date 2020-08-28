import React from 'react';

const Pagination = ({
  itemsPerPage,
  currentPage,
  totalSize,
  onPreviousPage,
  onNextPage,
  onSelectLimitPerPage,
}) => {
  const limits = [10, 15, 20, 30, 50];

  return (
    <div>
      Rows per page
      <select
        name="limits"
        onChange={(e) => onSelectLimitPerPage(e.target.value)}
      >
        {limits.map((limit) => (
          <option key={limit} value={itemsPerPage}>
            {limit}
          </option>
        ))}
      </select>
      {itemsPerPage} of {totalSize} / current page {currentPage}
      <button onClick={onPreviousPage}>{`<`}</button>
      <button onClick={onNextPage}>{`>`}</button>
    </div>
  );
};

export default Pagination;
