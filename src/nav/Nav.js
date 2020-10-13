import React from 'react';
import './Nav.css';

import {BrowserRouter as Link} from 'react-router-dom';


class Nav extends React.Component {
  // constructor(props){
  //   super(props)
  // }
  render(){
    return (
        <div className="header-nav">
            <div className="container">
              <nav>
                <ul>
                  <li><Link to="/">Главная</Link></li>
                  <li><Link to="/about">О нас</Link></li>
                  <li><Link to="/points">Пункты обмена</Link></li>
                  <li><a href="/">Главная</a></li>
                  <li><a href="/points">Пункты обмена</a></li>
                </ul>
              </nav>
            </div>
          </div>
    );
  }
}

export default Nav;
