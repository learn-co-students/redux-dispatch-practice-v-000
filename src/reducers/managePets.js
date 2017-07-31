export let state;

export function managePets(state = { pets: [], }, action) {
  switch (action.type) {
  case 'ADD_PET':
    return { 
      pets: [
        ...state.pets,
        action.pet
      ]
     };
  case 'REMOVE_PET': 
  const indexR = state.pets.filter(pet => pet.id == action.id)
  const correct = state.pets.indexOf(indexR[0])
    return {
      pets: [
        ...state.pets.slice(0, correct),
        ...state.pets.slice(correct + 1)
      ]
    }
  default:
    return state;
  
  }
}

export function dispatch(action) {
  state = managePets(state, action);
  render();
}

export function render() {
  let container = document.getElementById('container');
  let petsList = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`;
  }).join(' ');
  container.innerHTML = `<ul>${petsList}</ul>`;
}


