import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ onCategoryChange }) => {
  return (
    <select onChange={onCategoryChange}>
      <option value="Dairy">Dairy</option>
      <option value="Meat">Meat</option>
      <option value="Vegetables">Vegetables</option>
    </select>
  );
};

Filter.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
};

export default Filter;
