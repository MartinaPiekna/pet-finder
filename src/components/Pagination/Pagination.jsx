import React from 'react';
import './pagination.scss';

export const Pagination = ({
  total,
  sheltersPerPage,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(total / sheltersPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(currentPage);

  return (
    <nav className="pagination" aria-label="Paginator">
      <ul className="pagination__list">
        {pageNumbers.map((number) => (
          <li key={number} className="pagination__item">
            <button
              type="button"
              onClick={() => paginate(number)}
              className={
                currentPage === number
                  ? 'pagination__button pagination__button--selected'
                  : 'pagination__button'
              }
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
