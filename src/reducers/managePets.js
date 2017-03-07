export let state;


export function managePets(state = {pets: []}, action){
  switch(action.type) {
    case 'ADD_PET':
      return Object.assign({}, state, {pets: [...state.pets, action.pet]})
    case 'REMOVE_PET':
      const newPetList = state.pets.filter(pet => pet.id !== action.id)
      return Object.assign({}, state, {pets: newPetList})
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  const el = document.getElementById('container')
  el.innerHTML = `<ul>${state.pets.map(pet => `<li>${pet.name}</li>``)}</ul>`
}
