import React, { useState } from 'react'

const TravelCard = ({ place }) => {
  const [count, setCount] = useState(0)



  function handleClick() {
    setCount(count + 1)
  }


  return (

    <div>
      <div className="travel-card"><p>{place.city}, {place.country} <br /> <img src={place.image} alt="travel pic" /> <br /> {place.description}</p>
        <div className="buttons">
          <button onClick={handleClick}>Vote {count}</button>
          <input id="checkbox" type="checkbox"></input>
          <label>Been there!</label>
        </div>
      </div>
    </div>
  )
}

export default TravelCard;
