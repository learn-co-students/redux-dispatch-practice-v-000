export let state;


export function managePets(state = {pets: [],}, action) {
  switch (action.type) {
    case 'ADD_PET':
      return Object.assign({}, state, {pets: [...state.pets, action.pet]});
    case 'REMOVE_PET':
      return Object.assign({}, state, {pets: state.pets.filter(pet => pet.id !== action.id)});
    default:
      return state;
  }
}

export function dispatch(action) {
  state = managePets(state, action)
  render();
}

export function render() {
  var container = document.getElementById('container')
  let petList = state.pets.map((pet) =>
    {return `<li>${pet.name}</li>`}
  ).join('');
  container.innerHTML = `<ul>${petList}</ul>`;
}

// dispatch({type: '@@INIT'})
