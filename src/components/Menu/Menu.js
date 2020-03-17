import React from 'react';
import './Menu.css';

const Menu = ({categories, changeCategory}) => {
  return (
    <nav>
      {categories.map((category, index) => (
        <button key={index} value={category} onClick={changeCategory}>{category}</button>
      ))}
    </nav>
  );
}

export default Menu;
