import React from 'react';
import img from '../images/profile-pic.jpg';
import DarkModeButton from './darkmode';
import { Link } from 'react-router-dom';

function header() {

  return (
    <header>
      <Link to="/">
        <span className="home-button">🏠</span>
      </Link>
      <div id="profile-pic">
          <img src={img} alt="" />
      </div>
      <h1>Pauline Gilg <span>✨</span></h1>
      <h2>Webmaster @Strasbourg</h2>
      <DarkModeButton />
    </header>
  );
}

export default header;