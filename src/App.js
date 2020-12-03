import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';


import Header from './header/Header';
import Footer from './footer/Footer';
import Rate from './rate/Rate';
import About from './components/about/About';
import Points from './containers/points/Points';
import Other from './other/Other';
import PointsList from './containers/PointsList';

class App extends React.Component {
  render(){
    return (
      <div className="site">
        <Header />

        <div className="container">
          <main>
              <Switch>
                <Route exact path="/currency-exchange/" component={Rate} />
                <Route exact path="/currency-exchange/about" component={PointsList} />
                <Route exact path="/currency-exchange/points" component={Points}>
                  <Points />
                  <PointsList />
                </Route>

                <Route component={Other} />     
              </Switch>

          </main>
        </div>

        <div className="container" id="cookie_info">
          <div className="site-content">
            <div className="well">
              На нашем сайте мы используем cookie для сбора информации технического характера.<br />В частности, для персонифицированной работы сайта мы обрабатываем IP-адресс региона вашего местоположения.&nbsp;<button className="btn btn-primary btn-sm">OK</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
