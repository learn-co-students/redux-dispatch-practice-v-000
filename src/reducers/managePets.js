//declare but do not assign state
export let state;

// give managePets reducer a default argument of an array
export function managePets(state = { pets: [] }, action){
  switch (action.type) {

    case 'ADD_PET':
    return {
      ...state,
      pets: [...state.pets, action.pet]
    }

    case 'REMOVE_PET':
    const petId = state.pets.findIndex(pet => pet.id === action.id)
    return {
      ...state,
      pets: [...state.pets.slice(0, petId), ...state.pets.slice(petId + 1)]
    }

    default:
    return state
  }
}

//persist changes to the state by calling the reducer
export function dispatch(action){
  state = managePets(state, action)
  //ensure that the render function runs every time dispatch function is called
  render()
}

//render function that changes our HTML every time we change the state
export function render(){
  document.getElementById('container').innerHTML = `<ul>${state.pets.map((pet) => {
    return `<li>${pet.name}</li>`
    }).join(' ')}</ul>`
}
