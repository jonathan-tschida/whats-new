import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle.js';
import './NewsContainer.css'

const NewsContainer = ({news}) => {
  return (
    <section>
      {news.map(NewsArticle)}
    </section>
  );
}

export default NewsContainer;
