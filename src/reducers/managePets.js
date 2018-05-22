export let state;


export function managePets(state = {pets: []}, action){
  switch(action.type){
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      const remove = state.pets.findIndex(pet => pet.id === action.id)
      return {pets: [...state.pets.slice(0, remove), ...state.pets.slice(remove+1)]}
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action);
  render();
}

export function render(){
  const pets = state.pets.map(pet => {
    return `<li>${pet.name}</li>`
  }).join(' ')
  document.getElementById('container').innerHTML = `<ul>${pets}</ul>`
}
