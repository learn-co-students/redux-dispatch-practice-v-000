export let state;

export function managePets(state = { pets: [] }, action) {
  switch (action.type) {
    case 'ADD_PET':
      return {pets: [...state.pets,action.pet]};
    case 'REMOVE_PET':
    const idx = state.pets.findIndex(pet => pet.id === action.id);
    if (idx !== -1) {
      return {pets: [...state.pets.slice(0,idx),...state.pets.slice(idx+1)]};
    }
    // else fall through to default.
    default:
      return state;
  }
}

export function dispatch(action) {
  state = managePets(state, action);
  render();
}

export function render() {
  document.getElementById('container').innerHTML = `<ul>${state.pets.map((pet, index) => '<li>' + pet.name + '</li>')}</ul>`;
}
