export let state;

export function managePets(state = { pets: [] }, action){
  switch (action.type) {
    case 'ADD_PET':
      return { pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      return { pets: state.pets.filter(pet => pet.id !== action.id)}
    default:
      return state;
  }
}

//should pass an action to the reducer
//and use that return value to update the state, a globally accessible variable
export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let container = document.getElementById('container');
  let petList = state.pets.map(pet => `<li>${pet.name}</li>`);

  return container.innerHTML = `<ul>${petList}</ul>`
}
