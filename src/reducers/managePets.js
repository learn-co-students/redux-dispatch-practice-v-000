export let state;
import React from 'react'


export function managePets(state = {pets: []}, action){
  switch (action.type){
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet]};
    case 'REMOVE_PET':

      const updatedPets = state.pets.filter(function(pet){
        return pet.id !== action.id
      });

      return {pets: updatedPets};
    default:
      return state
  }

}

export function dispatch(action){
  state = managePets(state, action);
  render()
}

export function render(){

  const html =
    "<ul>" + state.pets.map(pet =>
          "<li>" + pet.name  + "</li>"
        )
      + "</ul>";


  document.getElementById('container').innerHTML = html
}
