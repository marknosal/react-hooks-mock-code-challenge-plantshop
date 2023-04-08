import React, { useState } from "react";

function PlantCard({ info, onUpdateStock }) {

  const { id, name, image, price, stocked } = info

  const [stock, setStock] = useState(stocked)

  function toggleStock() {
    setStock(stock => !stock)
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'stocked': !stock}),
    })
      .then(response => response.json())
      .then(data => onUpdateStock(data))
  }


  return (
    <li className="card" id={id}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stocked ? (
        <button className="primary" onClick={toggleStock}>In Stock</button>
      ) : (
        <button onClick={toggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
