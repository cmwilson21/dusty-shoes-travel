import React, {useState, useEffect} from 'react';
import TravelCard from './TravelCard'

const TravelList = () => {
  const [places, setPlaces] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3010/places")
    .then(resp => resp.json())
    .then(data => setPlaces(data))
  }, [])

  return (
    <div>
     <h3>Travel List</h3>
     <h4>Have friends vote on your next destination!</h4>
     <p>When you've made the trip, check it off from your list. You can revisit your destinations anytime from your <strong>Been There</strong> list.</p>
     {places.map((place) => <TravelCard  key={place.id} place={place}/>)}
    </div>
  )
}

export default TravelList
