import React from 'react'

const Search = ({ search, onSearchChange }) => {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form className="searchbar" onSubmit={handleSubmit}>
        <input type="text" id="search" placeholder="Search for a country..." value={search} onChange={e => onSearchChange(e.target.value)} /> 
      </form>
    </div>
  )
}

export default Search
