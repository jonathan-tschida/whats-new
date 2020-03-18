import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import Menu from '../Menu/Menu.js';
import NewsContainer from '../NewsContainer/NewsContainer.js';
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
      searchTerm: '',
      selectedCategory: 'local',
      categories: {
        entertainment,
        health,
        local,
        science,
        technology
      }
    }
  }

  changeCategory = (event) => {
    this.setState({searchTerm: '', selectedCategory: event.target.value});
  }

  updateSearchTerm = (phrase) => {
    this.setState({searchTerm: phrase});
  }

  filterArticles = () => {
    const {searchTerm, selectedCategory, categories} = this.state;
    const articles = categories[selectedCategory];
    const matchingArticles = articles.filter(article => {
      let headlineMatches = article.headline.toLowerCase().includes(searchTerm.toLowerCase());
      let descriptionMatches = article.description.toLowerCase().includes(searchTerm.toLowerCase());
      return headlineMatches || descriptionMatches;
    });
    return matchingArticles;
  }

  addDefaultSrc = (event) => {
    const placeholderImage = 'https://furcommission.com/wp-content/uploads/New-Images/Home-Page_Slider/News.jpg';
    event.target.src = placeholderImage;
  }

  render () {
    const articles = this.filterArticles();
    return (
      <main className='app'>
        <header>
          <h1>{'What\'s New?'}</h1>
          <SearchForm updateSearchTerm={this.updateSearchTerm} />
          <Menu categories={Object.keys(this.state.categories)} changeCategory={this.changeCategory} />
        </header>
        <NewsContainer news={articles} addDefaultSrc={this.addDefaultSrc} />
      </main>
    );
  }
}

export default App;
