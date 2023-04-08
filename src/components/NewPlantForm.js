import React, { useState } from "react";

function NewPlantForm({ onNewPlant }) {

  const[newSubmit, setNewSubmit] = useState({
    name: '',
    image: '',
    price: '',
    stocked: true
  })

  function handleNewName(event) {
    setNewSubmit({...newSubmit, name: event.target.value})
  }

  function handleNewImage(event) {
    setNewSubmit({...newSubmit, image: event.target.value})
  }

  function handleNewPrice(event) {
    setNewSubmit({...newSubmit, price: event.target.value})
  }
  

  function handleNewPlantSubmit(event) {
    event.preventDefault()
    onNewPlant(newSubmit)
    setNewSubmit({
      name: '',
      image: '',
      price: '',
      stocked: true
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleNewPlantSubmit}>
        <input value={newSubmit.name} onChange={handleNewName} type='text' name="name" placeholder="Plant name" />
        <input value={newSubmit.image} onChange={handleNewImage} type='text' name="image" placeholder="Image URL" />
        <input value={newSubmit.price} onChange={handleNewPrice} type='number' name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
