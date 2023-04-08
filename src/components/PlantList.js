import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onUpdateStock }) {
  return (
    <ul className="cards">{plants.map(plant => {
      return (
        <PlantCard key={plant.id} info={plant} onUpdateStock={onUpdateStock} />
      )
    })}
    </ul>
  );
}

export default PlantList;
