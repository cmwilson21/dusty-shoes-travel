import React, { useState, useEffect } from 'react';
import TravelCard from './TravelCard'
import Search from './Search'

const TravelList = () => {
  const [places, setPlaces] = useState([])
  const [search, setSearch] = useState("")


  useEffect(() => {
    fetch("http://localhost:3010/places")
      .then(resp => resp.json())
      .then(data => setPlaces(data))
  }, [])


  function handleSearchChange (e) {
    setSearch(e.target.value)
  }

  const filteredPlaces = search === "" ? places : places.filter(place => place.country.toLowerCase().includes(search.toLowerPlace()) === true)


  return (
    <div>
      <h3>Travel List</h3>
      <Search search={search} handleSearchChange={handleSearchChange} />
      <h4>Where will you go next?</h4>
      {/* <h4>Have friends vote on your next destination!</h4> */}
      {/* <p>When you've made the trip, check it off from your list. You can revisit your destinations anytime from your <strong>Been There</strong> list.</p> */}
      {places.map((place) => <TravelCard key={place.id} id={place.id} place={place} places={places} setPlaces={setPlaces}/>)}
    </div>
  )
}

export default TravelList
