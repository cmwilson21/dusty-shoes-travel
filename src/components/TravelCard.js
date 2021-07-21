//This will be individual cards containing the json data for each destination.
import React, {useEffect, useState} from 'react'

const TravelCard = () => {
  const [places, setPlaces] = useState([]);
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    fetch("http://localhost:3001/places")
    .then(resp => resp.json())
    .then(data => setPlaces(data))
  }, [])
  
  function handleClick() {
    setCount(count + 1)
  }

  
  return (
    <div className="travel-card">
      {places.map((place, index) => <p key={index}>{place.city} {place.country} <br/> <img src={place.img} alt="travel pic"/> <br/> {place.description}</p>)}
      <button onClick={handleClick}>Like {count}</button>
      <div className="checkbox">
        <input type="checkbox"></input>
        <label>Been there!</label>
      </div>
    </div>
  )
}

export default TravelCard;
