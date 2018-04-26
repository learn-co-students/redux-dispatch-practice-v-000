export let state;


export function managePets(state = { pets: [] }, action) {
  switch (action.type) {
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet]};
    case 'REMOVE_PET':
      let removeIndex = state.pets.findIndex((pet) => {
        return pet.id === action.id;
      });
      return {pets: [
        ...state.pets.slice(0, removeIndex), 
        ...state.pets.slice(removeIndex+1, state.pets.length)
      ]};
    default: 
      return state;
  }
}

export function dispatch(action) {
  state = managePets(state, action)
  render();
}

export function render() {
  let html = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`;
  }).join(" ");
  let container = document.getElementById('container');
  container.innerHTML = `<ul>${html}</ul>`;
}
