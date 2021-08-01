import React from 'react'

const Search = ({search, handleSearchChange}) => {



  return (
    <div>
       <input type="text" id="search" placeholder="Search for a country..." value={search} onChange={handleSearchChange}/>
      <button>Search</button>
      
    </div>
  )
}

export default Search
