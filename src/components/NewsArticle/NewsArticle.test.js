import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import NewsArticle from './NewsArticle';

describe('NewsArticle', () => {
  it('should display correctly', () => {
    const mockDefaultSrc = jest.fn();
    const mockStory = {
      id: 1,
      headline: 'The Who postpones Denver Concert at the Pepsi Center',
      img: 'https://theknow.denverpost.com/wp-content/uploads/2016/03/CDXXTHEWHODSC_4082x.jpg',
      description: 'Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.',
      url: 'https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/'
    };
    const { getByText, getByAltText } = render(
      <NewsArticle
        key={mockStory.id}
        story={mockStory}
        addDefaultSrc={mockDefaultSrc}
      />
    );

    expect(getByText(/The Who postpones Denver Concert/)).toBeInTheDocument();
    expect(getByText('Link to article')).toBeInTheDocument();
    expect(getByText(/after an illness robbed singer Roger Daltrey/)).toBeInTheDocument();
    expect(getByAltText(/The Who/).src).toEqual('https://theknow.denverpost.com/wp-content/uploads/2016/03/CDXXTHEWHODSC_4082x.jpg');
    expect(mockDefaultSrc).not.toHaveBeenCalled();
  })

  it('should display a default image on error', () => {
    const mockDefaultSrc = jest.fn();
    const mockStory = {
      id: 5,
      headline: 'Motorcyclist killed in crash near Capitol Hill in Denver',
      img: 'https://localtvkdvr.files.wordpress.com/2019/09/fatal-motorcycle.jpeg?quality=85&strip=all&w=800&h=450&crop=1',
      description: 'A motorcyclist was killed in a crash near East 17th Avenue and Park Avenue in Denver early Friday morning.',
      url: 'https://kdvr.com/2019/09/27/motorcyclist-killed-in-crash-near-capitol-hill-in-denver/'
    };
    const { getByText, getByAltText } = render(
      <NewsArticle
        key={mockStory.id}
        story={mockStory}
        addDefaultSrc={mockDefaultSrc}
      />
    );

    fireEvent.error(getByAltText(/Motorcyclist killed/));

    expect(getByText(/Motorcyclist killed in crash/)).toBeInTheDocument();
    expect(getByText('Link to article')).toBeInTheDocument();
    expect(getByText(/near East 17th Avenue and Park Avenue/)).toBeInTheDocument();
    expect(getByAltText(/Motorcyclist killed/).src).toEqual('https://localtvkdvr.files.wordpress.com/2019/09/fatal-motorcycle.jpeg?quality=85&strip=all&w=800&h=450&crop=1');
    expect(mockDefaultSrc).toHaveBeenCalledTimes(1);
  })
})
