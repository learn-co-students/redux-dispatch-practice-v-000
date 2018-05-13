export let state;

function deletePet(array, id) {
  return array.filter(pet => pet.id !== id)
}

export function managePets(state = {pets: []}, action) {
  switch(action.type) {
    case 'ADD_PET':
      // return Object.assign({}, state, {pets:[...state.pets, action.pet]})
      return {...state, pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      // return Object.assign({}, state, {pets: deletePet(state.pets, action.id)})
      return {...state, pets: deletePet(state.pets, action.id)}
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render() {
  let container = document.getElementById('container');
  let petsList = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`;
  }).join(' ');
  container.innerHTML = `<ul>${petsList}</ul>`;
}
