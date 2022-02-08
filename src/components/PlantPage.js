import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchValue, setSearchValue] = useState('')


  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then( r => r.json() )
      .then( setPlants )
  }, [])


  const addPlantToState = plant => setPlants( [plant, ...plants] )

  const changeSearchValue = e => setSearchValue(e.target.value )
  

  const searchedPlants = plants.filter(plantObj => {
    const lowerName = plantObj.name.toLowerCase()
    const lowerSearch = searchValue.toLowerCase()
    return lowerName.includes( lowerSearch )
  }) 
   

  const changePriceOfPlant = (plant, newPrice) => {

    const index = plants.findIndex( pObj => pObj.id === plant.id)
    const newPlants = [...plants]
    newPlants[index].price = newPrice
    setPlants(newPlants)

    // const newPlants = 
    //   plants.map(pObj => pObj.id = plant.id ? {...pObj, price: newPrice} : pObj)
    // setPlants( newPlants )


    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: 'PATCH', 
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify({

        price: newPrice

      })
    })
  
  
  }

  const killPlant = plant => {

    setPlants( plants.filter(p => p.id != plant.id) )

    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: 'DELETE'
    })
  }

  return (
    <main>
      <NewPlantForm addPlantToState={addPlantToState} />
      <Search changeSearchValue={changeSearchValue} />
      
      <PlantList killPlant={killPlant} changePriceOfPlant={changePriceOfPlant} plants={searchedPlants} />
    </main>
  );
}

export default PlantPage;