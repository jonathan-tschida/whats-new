import React, { Component } from 'react';
import './NewsArticle.css';

class NewsArticle extends Component {
  render() {
    return (
      <article key={this.props.id}>
        <h2>{this.props.headline}</h2>
        <img src={this.props.img} alt='' />
        <p>{this.props.description}</p>
        <a href={this.props.url}>Link to article</a>
      </article>
    );
  }
}

export default NewsArticle;
