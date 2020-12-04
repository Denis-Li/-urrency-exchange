import React from 'react';
import './Header.css';
import Nav from '../nav/Nav';
import img from './img/golden-3346988_1280.jpg';



class Header extends React.Component {
  // constructor(props){
  //   super(props)
  // }
  render(){
    return (
        <header>
          <div className="top-bar">
            <img className="animate-dropdown" src={img} alt="coins"/>
          </div>
          <div className="main-header">
            <div className="container">
              <h1 className="site-title">Lite Level</h1>
            </div>
          </div>

          <Nav />


        </header>

        
    );
  }
}

export default Header;
