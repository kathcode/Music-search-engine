import React from 'react';

import './Pagination.css';

// Material UI
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

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
      <label>Rows per page</label>
      <Select
        native
        value={itemsPerPage}
        onChange={(e) => onSelectLimitPerPage(e.target.value)}
      >
        {limits.map((limit) => (
          <option key={limit} value={itemsPerPage}>
            {limit}
          </option>
        ))}
      </Select>
      <label>
        {itemsPerPage} of {totalSize} / current page {currentPage}
      </label>
      <Button
        className="m-5"
        onClick={onPreviousPage}
        variant="outlined"
        color="primary"
      >
        {`<`}
      </Button>
      <Button
        className="m-5"
        onClick={onNextPage}
        variant="outlined"
        color="primary"
      >
        {`>`}
      </Button>
    </div>
  );
};

export default Pagination;
