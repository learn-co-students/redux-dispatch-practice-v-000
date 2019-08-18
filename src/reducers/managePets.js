export let state;

export function managePets(state = { pets: [] }, action) {
  switch (action.type) {
    case 'ADD_PET': {
      return Object.assign(
        {}, state,
        { pets: [...state.pets, action.pet] }
      );
    };

    case 'REMOVE_PET': {
      const remainingPets = state.pets.filter(pet => pet.id !== action.id);
      return Object.assign(
        {}, state,
        { pets: remainingPets }
      );
    };

    default: {
      return state;
    }

  }
}

export function dispatch(action) {
  state = managePets(state, action);
  render();
}

export function render() {
  const petDisplay = state.pets.map(
    pet => '<li>' + pet.name + '</li>'
  ).join(' ');

  document.getElementById('container').innerHTML =
    '<ul>' + petDisplay + '</ul>';
}
