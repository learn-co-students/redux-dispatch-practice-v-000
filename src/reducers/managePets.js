export let state;

export const managePets = (state = {
  pets: [],
}, action) => {
  switch(action.type) {
    case "ADD_PET":
      return {
        ...state,
        pets: [
          ...state.pets,
          action.pet
        ]
      };
    case "REMOVE_PET":
      const petIndex = state.pets.findIndex(pet => pet.id === action.id);
      return {
        ...state,
        pets: [
          ...state.pets.slice(0, petIndex),
          ...state.pets.slice(petIndex + 1)
        ]
      };
    default:
      return state;
  }
}

export const dispatch = (action) => {
  state = managePets(state, action);
  render();
};

export const render = () => {
  let container = document.getElementById('container');
  let petsList = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`;
  }).join(' ');
  container.innerHTML = `<ul>${petsList}</ul>`;
}
