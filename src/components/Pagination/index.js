import React, { useState } from 'react';

const Pagination = ({ itemsPerPage, totalSize, onPreviousPage, onNextPage, currentPage }) => {
  const [selectedLimit, setSelectedLimit] = useState(10);
  const limits = [10,15,20,30,50];

  return (
    <div>
      Rows per page 
      <select name="limits" onChange={(e) => setSelectedLimit(e.target.value)}>
        {limits.map(limit => (
          <option key={limit} value={limit} defaultValue={selectedLimit}>{limit}</option>
        ))}
      </select>
      {itemsPerPage} of {totalSize} / current page {currentPage}
      <button onClick={onPreviousPage}>{`<`}</button>
      <button onClick={onNextPage}>{`>`}</button>
    </div>
  )
};

export default Pagination;
