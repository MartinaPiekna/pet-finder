import React from 'react';
import './pagination.scss';

export const Pagination = ({ total, sheltersPerPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(total / sheltersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="pagination">
      <ul className="pagination__list">
        {pageNumbers.map((number) => (
          <li key={number} className="pagination__item">
            <button
              type="button"
              onClick={() => paginate(number)}
              className="pagination__button"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
