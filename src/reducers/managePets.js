export let state;


export function managePets(state = {pets: []}, action){
  switch(action.type) {
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      const removePet = state.pets.findIndex(pet => pet.id === action.id)
      return {pets: [...state.pets.slice(0, removePet), ...state.pets.slice(removePet + 1)] }
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  const htmlAdd = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`
  }).join(" ")
  document.getElementById('container').innerHTML = `<ul>${htmlAdd}</ul>`
}
