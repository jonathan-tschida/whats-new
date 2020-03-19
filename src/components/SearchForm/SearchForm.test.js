import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  it('should display correctly', () => {
    const { getByText, getByPlaceholderText } = render(
      <SearchForm />
    );

    expect(getByPlaceholderText('Search')).toBeInTheDocument();
    expect(getByText('Search')).toBeInTheDocument();
  })

  it('can search articles', () => {
    const mockUpdateSearchTerm = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <SearchForm updateSearchTerm={mockUpdateSearchTerm} />
    );

    fireEvent.change(getByPlaceholderText('Search'), { target: { value: 'Apple' } });
    fireEvent.click(getByText('Search'))

    expect(getByPlaceholderText('Search').value).toEqual('');
    expect(mockUpdateSearchTerm).toHaveBeenCalledWith('Apple');
  })
})
