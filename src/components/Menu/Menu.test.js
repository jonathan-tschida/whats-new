import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Menu from './Menu';

describe('Menu', () => {
  it('should display correctly', () => {
    const mockCategories = [
      'entertainment',
      'health',
      'local',
      'science',
      'technology'
    ];
    const { getByText } = render(
      <Menu
      categories={mockCategories}
      selectedCategory={'local'}
      />
    );

    expect(getByText('entertainment')).toBeInTheDocument();
    expect(getByText('health')).toBeInTheDocument();
    expect(getByText('local')).toBeInTheDocument();
    expect(getByText('science')).toBeInTheDocument();
    expect(getByText('technology')).toBeInTheDocument();
    expect(getByText('local').className).toEqual('selected');
  })

  it('can change category', () => {
    const mockChangeCategory = jest.fn();
    const mockCategories = [
      'entertainment',
      'health',
      'local',
      'science',
      'technology'
    ];
    const { getByText } = render(
      <Menu
      categories={mockCategories}
      selectedCategory={'local'}
      changeCategory={mockChangeCategory}
      />
    );

    fireEvent.click(getByText('entertainment'));

    expect(mockChangeCategory).toHaveBeenCalled();
  })
})
