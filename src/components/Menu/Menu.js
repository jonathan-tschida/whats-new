import React, { Component } from 'react';
import './Menu.css'

class Menu extends Component {
  render() {
    return (
      <nav>
        <button value="local" onClick={this.props.changeCategory}>Local News</button>
        <button value="technology" onClick={this.props.changeCategory}>Technology</button>
        <button value="entertainment" onClick={this.props.changeCategory}>Entertainment</button>
        <button value="science" onClick={this.props.changeCategory}>Science</button>
        <button value="health" onClick={this.props.changeCategory}>Health</button>
      </nav>
    );
  }
}

export default Menu;
