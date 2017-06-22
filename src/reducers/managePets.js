'use strict'
export let state

export function managePets (state = { pets: [] }, action) {
  switch (action.type) {
    case 'ADD_PET':
      return { pets: [...state.pets, action.pet] }
    case 'REMOVE_PET':
      let removalIndex = state.pets.findIndex(x => x.id === action.id)
      return { pets: [...state.pets.slice(0, removalIndex), ...state.pets.slice(removalIndex + 1)] }
    default:
      return state
  }
}

export function dispatch (action) {
  state = managePets(state, action)
  render()
}

export function render () {
  document.getElementById('container').innerHTML = `<ul>${state.pets.map((pet) => {
    return `<li>${pet.name}</li>`  
    }).join(' ')}</ul>`
}
