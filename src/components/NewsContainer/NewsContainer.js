import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle.js';
import './NewsContainer.css'

const NewsContainer = ({news, addDefaultSrc}) => {
  return (
    <section>
      {news.map(story => (
        <NewsArticle key={story.id} story={story} addDefaultSrc={addDefaultSrc}/>
      ))}
    </section>
  );
}

export default NewsContainer;
