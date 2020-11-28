import React from 'react';
import './about.scss';

export const Us = (props) => {
  return (
    <>
      <section className="wrapper">
        <h1>{props.about}</h1>
        <div>
          <div>
            <img src={props.profilePic} alt={props.name} />
            <div>
              <div class="icons">
                <a
                  className="link"
                  href={props.linkedin}
                  target="blank"
                  rel="noopener"
                >
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a
                  className="link"
                  href={props.git}
                  target="blank"
                  rel="noopener"
                >
                  <i className="fab fa-github-square fa-2x"></i>
                </a>
                <a
                  className="link"
                  href={props.fb}
                  target="blank"
                  rel="noopener"
                >
                  <i className="fab fa-facebook-square fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="flex">
            <ul>
              <li>
                Jmenuji se: <span>{props.fullName}</span>
              </li>
              <li>
                Bydlím: <span>v Praze</span>
              </li>
              <li>
                Nejvíce času věnuji:
                <span>{props.freeTime}</span>
              </li>
              <li>
                Proč právě PetFinder:
                <span>{props.motivation}</span>
              </li>
              <li>
                Proč pracujeme spolu:
                <span>{props.common}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
