import React from 'react';
import f1Logo from '../images/formula-1-logo-2-2.png';
import '../styles/header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Tryunfo Pilotos</h1>
        <img src={ f1Logo } alt="F1 logo" />
      </header>
    );
  }
}

export default Header;
