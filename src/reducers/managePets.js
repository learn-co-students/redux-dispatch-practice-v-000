export let state;

export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
      return {...state, pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      const index = state.pets.findIndex(pet => pet.id === action.id)
      const updatedPets = [...state.pets]
      updatedPets.splice(index, 1)
      return {...state, pets: updatedPets}
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  document.getElementById('container').innerHTML = "<ul>" + state.pets.map(pet => "<li>" + pet.name + "</li>").join('') + "</ul>"
}
