export let state;


export function managePets(state={pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet]};
    case 'REMOVE_PET':
      const petIndex = state.pets.findIndex(pet => pet.id === action.id)
      return {pets: [...state.pets.slice(0, petIndex), ...state.pets.slice(petIndex+1)]};
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action);
  render();
}

export function render(){
  const petsList = state.pets.map(pet => `<li>${pet.name}</li>`)
  document.getElementById('container').innerHTML = `<ul>${petsList}</ul>`
}
