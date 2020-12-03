import React from 'react';
import './Nav.css';

import { Link } from 'react-router-dom';



class Nav extends React.Component {
  render(){
    return (
        <div className="header-nav">
            <div className="container">
              <nav>
                <ul>
                  <li><Link to="/currency-exchange/">Главная</Link></li>
                  <li><Link to="/currency-exchange/about">О нас</Link></li>
                  <li><Link to="/currency-exchange/points">Памятные монеты</Link></li>
                </ul>
              </nav>
            </div>
          </div>
    );
  }
}

export default Nav;
