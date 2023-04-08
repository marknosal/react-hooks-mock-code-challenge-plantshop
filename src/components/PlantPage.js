import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const[plants, setPlants] = useState([])
  const [searchText, setSearchText] = useState('')


  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(response => response.json())
      .then(data => setPlants(data))
  }, [])

  function addNewPlant(newPlant) {
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlant)
    })
      .then(response => response.json())
      .then(data => setPlants([...plants, data]))
  }

  function updateStock(updatedStock) {
    const updatedPlants = plants.map(plant => {
      return plant.id === updatedStock.id ? updatedStock : plant
    })
    setPlants(updatedPlants)
  }

  

  // function handleSearch(searchText) {
  //   setSearchText(searchText)
  // }

  const searchedPlants = plants.filter((plant) => plant.name.toLowerCase().includes(searchText.toLowerCase()))

  console.log(searchText)

  return (
    <main>
      <NewPlantForm onNewPlant={addNewPlant} />
      <Search search={searchText} setSearch={setSearchText} />
      <PlantList plants={searchedPlants} onUpdateStock={updateStock} />
    </main>
  );
}

export default PlantPage;
