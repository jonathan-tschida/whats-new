import React from 'react';
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

export default Menu;
