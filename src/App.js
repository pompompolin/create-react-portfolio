import React from 'react';
import Header from './components/header';
import Nav from './components/nav';
import Home from './components/home';
import Legal from './components/mentions-legales';
import Cookies from './components/cookies';
import Footer from './components/footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './fonts/RobotoMono-Regular.ttf';


function App() {
  return (
    <Router>
      <div id="site-wrapper">
        <Header />
        <Nav />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/mentions-legales" component={Legal} />
            <Route path="/cookies" component={Cookies} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;