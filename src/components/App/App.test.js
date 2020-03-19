import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should display Correctly', () => {
    const { getByText } = render(
      <App />
    );

    expect(getByText('What\'s New?')).toBeInTheDocument();
    expect(getByText('Search')).toBeInTheDocument();
    expect(getByText('local').className).toEqual('selected');
    expect(getByText(/The Who postpones Denver Concert/)).toBeInTheDocument();
  });

  it('can switch categories', () => {
    const { getByText } = render(
      <App />
    );

    fireEvent.click(getByText('entertainment'));

    expect(getByText('local').className).toEqual('');
    expect(getByText('entertainment').className).toEqual('selected');
    expect(getByText(/Spider-Man/)).toBeInTheDocument();
  })

  it('can search the displayed articles', () => {
    const { getByText, getByPlaceholderText } = render(
      <App />
    );
    const whoArticle = getByText(/The Who postpones Denver Concert/)

    fireEvent.change(getByPlaceholderText('Search'), { target: { value: 'chicken' } });
    fireEvent.click(getByText('Search'))

    expect(whoArticle).not.toBeInTheDocument();
    expect(getByText(/Giant Chicken Skeleton/)).toBeInTheDocument();
  })

  it('can replace the src for an image that fails to load', () => {
    const { getByAltText } = render(
      <App />
    );

    fireEvent.error(getByAltText(/Motorcyclist killed/));

    expect(getByAltText(/Motorcyclist killed/).src).toEqual('https://furcommission.com/wp-content/uploads/New-Images/Home-Page_Slider/News.jpg')
  })
});
