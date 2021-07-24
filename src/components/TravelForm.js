import React, {useState} from 'react'

const TravelForm = ({history}) => {
  const [form, setForm] = useState({
    city: "",
    country: "",
    image:"",
    description:""
  });


  const handleChange = e => {
    setForm({
        ...form,
        [e.target.name]:e.target.value
      })
}

function handleSubmit(e) {
  e.preventDefault();
  fetch('http://localhost:3001/places', {
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  method: "POST",
  body: JSON.stringify(form)
})
.then(resp => resp.json())
.then(() => history.push("/travel-list"))
}  

  return (
    <div className="TravelForm">
      <form>
        <div>
          <label>City:</label>
          <input onChange={handleChange} type="text" id="city" name="city" value={form.city}/>
        </div>
        <div>
          <label>Country:</label>
          <input onChange={handleChange} type="text" id="country" name="country" value={form.country}/>
        </div>
        <div>
          <label>Image:</label>
          <input onChange={handleChange} type="text" id="image" name="image" value={form.image}/>
        </div>
        <div>
          <label>Description:</label>
          <textarea onChange={handleChange} name="description" placeholder="Why do you want to visit?" value={form.description} />
        </div>
        <div>
          <input onClick={handleSubmit} type="submit" value="Add Location" />
        </div>
      </form>
    </div>
  )
}

export default TravelForm
