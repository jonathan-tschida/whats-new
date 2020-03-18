import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({story, addDefaultSrc}) => {
  const {id, headline, img, description, url} = story;
  return (
    <article id={id} className='news-article'>
      <h2>{headline}</h2>
      <img src={img} alt='' onError={addDefaultSrc} />
      <p>{description}</p>
      <a href={url}>Link to article</a>
    </article>
  )
}

export default NewsArticle;
