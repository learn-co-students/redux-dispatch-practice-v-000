import React from 'react'

export let state;

export function managePets(state={ pets: [] }, action){
  switch (action.type) {
  case 'ADD_PET':
    return { pets: state.pets.concat(action.pet) }
  case 'REMOVE_PET':
    return { pets: state.pets.filter(pet => pet.id !== action.id) }
  default:
    return state;
  }
}

export function dispatch(action){
  state = managePets(state, action);
  render();
}

export function render(){
  let petString = "<ul>"
  state.pets.forEach(pet => petString += `<li>${pet.name}</li>`)
  petString += "</ul>"
  document.getElementById("container").innerHTML = petString
}
