import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ onDarkModeClick }) => {
  return (
    <header>
      <button onClick={onDarkModeClick}>Toggle Mode</button>
    </header>
  );
};

Header.propTypes = {
  onDarkModeClick: PropTypes.func.isRequired,
};

export default Header;
