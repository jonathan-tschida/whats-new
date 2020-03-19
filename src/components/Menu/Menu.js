import React from 'react';
import PropTypes from 'prop-types';
import './Menu.css';

const Menu = ({categories, selectedCategory, changeCategory}) => {
  return (
    <nav>
      {categories.map((category, index) => (
        <button
          key={index}
          value={category}
          onClick={changeCategory}
          className={category === selectedCategory? 'selected' : ''}
        >
          {category}
        </button>
      ))}
    </nav>
  );
}

Menu.propTypes = {
  categories: PropTypes.array,
  selectedCategory: PropTypes.string,
  changeCategory: PropTypes.instanceOf(Function)
}

export default Menu;
