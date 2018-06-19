export let state;

export function managePets(state = {pets: []}, action) {
  switch(action.type) {
    case 'ADD_PET':
      return {...state, pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      const index = state.pets.findIndex(pet => pet.id === action.id)
      return {...state,
        pets: [...state.pets.slice(0, index), ...state.pets.slice(index + 1)]
      }
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  // .join or format further
  const petsHTML = state.pets.map(pet => `<li>${pet.name}</li>`)
  document.getElementById('container').innerHTML = `<ul>${petsHTML}</ul>`
}
