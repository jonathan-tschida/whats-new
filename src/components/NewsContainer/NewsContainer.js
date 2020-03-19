import React from 'react';
import PropTypes from 'prop-types';
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

NewsContainer.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
  addDefaultSrc: PropTypes.instanceOf(Function)
}

export default NewsContainer;
