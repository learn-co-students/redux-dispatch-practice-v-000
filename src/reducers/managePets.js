export let state;


export function managePets(state = { pets: [] }, action) {
  switch (action.type) {
    case 'ADD_PET':
      return Object.assign({}, state, {
        pets: [...state.pets, action.pet]
      });
    case 'REMOVE_PET':
      return Object.assign({}, state, {
        pets: state.pets.filter(pet => pet.id !== action.id)
      });
    default: return state;
  }
}

export function dispatch(action) {
  state = managePets(state, action);
  render();
}

export function render() {
  const container = document.getElementById('container');
  container.innerHTML = '';
  const list = container.appendChild(document.createElement('ul'));
  state.pets.forEach((pet) => {
    const listItem = list.appendChild(document.createElement('li'));
    listItem.innerHTML = pet.name;
  });
}
