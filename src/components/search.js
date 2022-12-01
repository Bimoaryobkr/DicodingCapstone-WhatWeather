import React from 'react';

function SearchBar({ defaultKeyword, refreshWeather, onSearch }) {
  const [keyword, setKeyword] = React.useState(defaultKeyword || '');

  const onSubmit = (event) => {
    event.preventDefault();
    refreshWeather(keyword);
  };

  const onSearchChange = (event) => {
    setKeyword(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='d-flex search_bar my-4'>
        <input onChange={onSearchChange} value={keyword} placeholder='Search' aria-label='Search' type='search' className='me-2 form-control' />
        <button type='submit' className='btn btn-dark'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar;