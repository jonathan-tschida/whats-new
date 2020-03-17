import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  const {id, headline, img, description, url} = props;
  return (
    <article key={id}>
      <h2>{headline}</h2>
      <img src={img} alt='' />
      <p>{description}</p>
      <a href={url}>Link to article</a>
    </article>
  )
}

export default NewsArticle;
