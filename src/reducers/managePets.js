export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      const petIndex = state.pets.findIndex(p => p.id === action.id);

      const newState = {pets: [...state.pets]}

      newState.pets.splice(petIndex, 1)

      return newState
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action);
  render()
}

export function render(){
  let container = document.getElementById('container');

  let petsList = state.pets.map((pet) => `<li>${pet.name}</li>`).join(' ');

  container.innerHTML = `<ul>${petsList}</ul>`;
}
