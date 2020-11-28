import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';
import logo from '../../assets/img/location.svg';

export const Navigation = () => {
  const [opened, setOpened] = useState(false);
  const handleClick = () => {
    setOpened(!opened);
  };
  return (
    <>
      <nav className="navigation">
        <div className="navigation__logo">
          <img src={logo} alt="logo" />
          <span>Pet Finder</span>
        </div>
        <div className="navigation__mobile-menu">
          <button
            onClick={(opened) => handleClick(opened)}
            className="navigation__hamburger"
            tabIndex="-1"
          ></button>
        </div>
        <ul
          className={
            opened
              ? 'navigation__list'
              : 'navigation__list navigation__list--closed '
          }
        >
          <Link to="/" className="navigation__link">
            <li className="navigation__item">Home</li>
          </Link>
          <Link to="/new" className="navigation__link">
            <li className="navigation__item">Přidat</li>
          </Link>
          <Link to="/detail" className="navigation__link">
            <li className="navigation__item">Detail</li>
          </Link>
          <Link to="/info" className="navigation__link">
            <li className="navigation__item">Rady a tipy</li>
          </Link>
          <Link to="/about" className="navigation__link">
            <li className="navigation__item">O nás</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
