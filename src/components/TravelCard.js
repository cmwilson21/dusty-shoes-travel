import React, { useState } from 'react'

const TravelCard = ({ place, id, places, setPlaces }) => {
  const [count, setCount] = useState(0)


  function handleClick() {
    setCount(count + 1);
  }

  function deletePost() {
    fetch(" http://localhost:3010/places/" + id, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
    const afterDeleteList = places.filter((element) => element.id !== id)
    setPlaces(afterDeleteList)
  }

  return (

    <div>
      <div className="travel-card"><p>{place.city}, {place.country} <br /> <img src={place.image} alt="travel pic" /> <br /> {place.description}</p>
        <div className="buttons">
          <button onClick={handleClick}>Likes {count}</button>
          {/* <button id="been-there-btn">Been There!</button> */}
          <button onClick={deletePost} id="emoji-btn">🗑</button>
        </div>
      </div>
    </div>
  )
}

export default TravelCard;
