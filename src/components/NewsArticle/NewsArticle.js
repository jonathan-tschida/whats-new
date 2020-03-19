import React from 'react';
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

export default NewsArticle;
