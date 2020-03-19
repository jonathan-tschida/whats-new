import React from 'react';
import PropTypes from 'prop-types';
import './NewsArticle.css';

const NewsArticle = ({story, addDefaultSrc}) => {
  const {id, headline, img, description, url} = story;
  return (
    <article id={id} className='news-article'>
      <div>
        <h2>{headline}</h2>
        <a href={url}>Link to article</a>
        <p>{description}</p>
      </div>
      <img src={img} alt={headline} onError={addDefaultSrc} />
    </article>
  )
}

NewsArticle.propTypes = {
  story: PropTypes.object,
  addDefaultSrc: PropTypes.instanceOf(Function)
}

export default NewsArticle;
