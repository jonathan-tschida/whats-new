import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      keyPhrase: ''
    }
  }

  updateKeyPhrase = (event) => {
    this.setState({keyPhrase: event.target.value})
  }

  submitSearch = (event) => {
    event.preventDefault();
    this.props.updateSearchTerm(this.state.keyPhrase);
    this.setState({keyPhrase: ''});
  }

  render() {
    return (
      <form>
        <input
          type='search'
          placeholder='Search'
          onChange={this.updateKeyPhrase}
          value={this.state.keyPhrase}
        />
        <button
          className='search-button'
          onClick={this.submitSearch}
        >
        Search
        </button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  updateSearchTerm: PropTypes.instanceOf(Function)
}

export default SearchForm;
