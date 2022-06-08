import React from 'react';

const Navbar = (props) => {
  const darkToggle = e => {
    e.preventDefault();
    props.changeDark()
  }
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={darkToggle}
          className={props.darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
