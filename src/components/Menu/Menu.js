import React, { Component } from 'react';
import './Menu.css'

class Menu extends Component {
  render() {
    return (
      <nav>
        {this.props.categories.map((category, index) => (
          <button key={index} value={category} onClick={this.props.changeCategory}>{category}</button>
        ))}
      </nav>
    );
  }
}

export default Menu;
