import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu.jsx';
import './navigation.scss';
import logo from '../../assets/icons/location.svg';

export const Navigation = () => {
  const { ref, isComponentVisible, setIsComponentVisible } = Menu(false);

  return (
    <>
      <nav className="navigation" aria-label="Paginator">
        <div className="navigation__logo">
          <Link to="/" className="navigation__name">
            <img
              className="navigation__image"
              src={logo}
              alt="logo"
              width="40px"
              height="40px"
            />
            <span>Pet Finder</span>
          </Link>
        </div>

        <div ref={ref} className="navigation__mobile--hidden">
          {isComponentVisible && (
            <>
              <div className="navigation__mobile-menu">
                <button
                  className="navigation__hamburger"
                  tabIndex="-1"
                ></button>
              </div>
              <ul className="navigation__list">
                <Link to="/" className="navigation__link">
                  <li className="navigation__item">Mapa</li>
                </Link>
                <Link to="/new" className="navigation__link">
                  <li className="navigation__item">Přidat</li>
                </Link>
                <Link to="/shelters" className="navigation__link">
                  <li className="navigation__item">Útulky</li>
                </Link>
                <Link to="/info" className="navigation__link">
                  <li className="navigation__item">Rady a tipy</li>
                </Link>
                <Link to="/about" className="navigation__link">
                  <li className="navigation__item">O nás</li>
                </Link>
              </ul>
            </>
          )}
          {!isComponentVisible && (
            <button
              className="navigation__hamburger"
              tabIndex="-1"
              onClick={() => setIsComponentVisible(true)}
            ></button>
          )}
        </div>

        <div className="navigation__desktop--hidden">
          <ul className="navigation__list">
            <Link to="/" className="navigation__link">
              <li className="navigation__item">Mapa</li>
            </Link>
            <Link to="/new" className="navigation__link">
              <li className="navigation__item">Přidat</li>
            </Link>
            <Link to="/shelters" className="navigation__link">
              <li className="navigation__item">Útulky</li>
            </Link>
            <Link to="/info" className="navigation__link">
              <li className="navigation__item">Rady a tipy</li>
            </Link>
            <Link to="/about" className="navigation__link">
              <li className="navigation__item">O nás</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};
