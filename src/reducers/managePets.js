export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
      return {pets: state.pets.concat(action.pet)}
    case 'REMOVE_PET':
      const removeIndex = state.pets.findIndex(pet=> pet.id === action.id)
      return {pets: [state.pets.slice(0, removeIndex)[0], state.pets.slice(removeIndex+1)[0]]}
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let container = document.getElementById('container');
  let petsList = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`;
  }).join(' ');
  container.innerHTML = `<ul>${petsList}</ul>`;
}
