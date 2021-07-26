//link : https://www.youtube.com/watch?v=jwfjgRBcUgE&list=PLeS7aZkL6GOsHNoyeEpeL8B1PnbKoQD9m&index=9
// tinh nang phan trang
//Pagination
// Co 2 nut: Prev, Next
// Props:
//     . pagination: required
//     . onPageChange: ham se duoc goi neu user click nut next or prev
// State: N/A
// Render:
//     . Nut Prev: trigger ham onPageChange voi page = page -1
//     . Nut Next: trigger ham onPageChange voi page = page +1
// Luu y:
//     . Nut prev se bi disable neu dang o trang 1
//     . Nut next se bi disable neu dang o trang cuoi

import React from "react";
import PropTypes from "prop-types";

function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit);
  console.log("totalPages: ", totalPages);

  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }
  return (
    <div>
      <button disabled={_page <= 1} onClick={() => handlePageChange(_page - 1)}>
        Prev
      </button>
      <button
        disabled={_page >= totalPages}
        onClick={() => handlePageChange(_page + 1)}
      >
        Next
      </button>
    </div>
  );
}

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
  onPageChange: null,
};

export default Pagination;
