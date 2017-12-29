export let state;

export function managePets(state = { pets: [] }, action) {
  switch (action.type) {
    case 'ADD_PET':
      state.pets.push(action.pet);
      return { pets: state.pets };
    case 'REMOVE_PET':
      return {
        pets: state.pets.filter(pet => pet.id !== action.id)
      };
    default:
      return state;
  }
}

export function render() {
  document.querySelector('#container').innerHTML = `<ul>${state.pets.map(
    pet => `<li>${pet.name}</li>`
  )}</ul>`;
}

export function dispatch(action) {
  state = managePets(state, action);
  render();
}
