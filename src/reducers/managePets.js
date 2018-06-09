export let state;


export function managePets(state = { pets: [] }, action) {
  switch (action.type) {
    case 'ADD_PET':
      return Object.assign({}, state, {
        pets: [
          ...state.pets,
          action.pet
        ]
      });
    case 'REMOVE_PET':
      const remainingPets = state.pets.filter((el, i) => el.id !== action.id);
      return Object.assign({}, state, {
        pets: remainingPets
      });
    default:
      return state;
  }
}

export function dispatch(action) {
  state = managePets(state, action);
  render();
}

export function render() {
  const container = document.getElementById('container');
  const petsList = state.pets.map(pet => `<li>${pet.name}</li>`).join(' ');
  container.innerHTML = `<ul>${petsList}</ul>`
  // petsList.forEach(el => container.appendChild(el));
}
