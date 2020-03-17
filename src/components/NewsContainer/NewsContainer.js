import React, { Component } from 'react';
import NewsArticle from '../NewsArticle/NewsArticle.js';
import './NewsContainer.css'

class NewsContainer extends Component {

  render() {
    return (
      <section>
        {this.props.news.map(story => new NewsArticle(story).render())}
      </section>
    );
  }
}

export default NewsContainer;
