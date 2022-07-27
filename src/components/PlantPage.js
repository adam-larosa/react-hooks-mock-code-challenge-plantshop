import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  useEffect( () => {
    fetch( 'http://localhost:6001/plants' )
      .then( resp => resp.json() )
      .then( plantsArray => setPlants( plantsArray ) )
  }, [] )



  const [ plants, setPlants ] = useState( [] )

  const addPlantToState = plantObj => {
    setPlants( plants => [ plantObj, ...plants ] )
  }


  const [ searchString, setSearchString ] = useState( '' )

  const changeSearchString = newString => {
    setSearchString( newString )
  }


  const filteredPlants = plants.filter( plantObj => {
    return plantObj.name.toLowerCase().includes( searchString.toLowerCase() ) 
  } )

  return (
    <main>
      <NewPlantForm addPlantToState={ addPlantToState } />
      <Search changeSearchString={ changeSearchString } />
      <PlantList plants={ filteredPlants } />
    </main>
  );
}

export default PlantPage;