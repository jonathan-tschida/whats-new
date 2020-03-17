import React, { Component } from 'react';
import NewsContainer from '../NewsContainer/NewsContainer.js';
import Menu from '../Menu/Menu.js';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import local from '../../data/local';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      appName: 'What\'s New?',
      selectedCategory: 'local',
      entertainment,
      health,
      local,
      science,
      technology
    }
  }

  changeCategory = (event) => {
    this.setState({selectedCategory: event.target.value});
  }

  render () {
    const {selectedCategory} = this.state;
    return (
      <div className="app">
        <header>
          <h1>{this.state.appName}</h1>
          <Menu changeCategory={this.changeCategory} />
        </header>
        <NewsContainer news={this.state[selectedCategory]}/>
      </div>
    );
  }
}

export default App;
