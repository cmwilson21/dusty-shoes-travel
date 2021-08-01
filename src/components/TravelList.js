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


  const filteredPlaces = search === "" ? places : places.filter(place => place.country.toLowerCase().includes(search.toLowerCase()) === true)

  function onSearchChange(newSearch) {
    setSearch(newSearch)
  }

  return (
    <div>
      <h3>Travel List</h3>
      <Search search={search} onSearchChange={onSearchChange} />
      <h4>Where will you go next?</h4>
      {/* future goal - <h4>Have friends vote on your next destination!</h4> */}
      {/* future goal - <p>When you've made the trip, check it off from your list. You can revisit your destinations anytime from your <strong>Been There</strong> list.</p> */}
      {filteredPlaces.map((place) => <TravelCard key={place.id} id={place.id} place={place} places={places} setPlaces={setPlaces} />)}
    </div>
  )
}

export default TravelList
