import React from 'react';
import '../styles/header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/The_Simpsons_Logo.svg/2560px-The_Simpsons_Logo.svg.png" alt="" />
        <h1>Trunfo</h1>
      </div>
    );
  }
}

export default Header;
