export let state;


export function managePets(state={pets:[]}, action){
  switch(action.type){
    case 'ADD_PET':
      return Object.assign({}, state, {
        pets:[
          ...state.pets, action.pet
        ]
      })
    case 'REMOVE_PET':
    const removeID = state.pets.findIndex(pet => pet.id === action.id)
      return Object.assign({}, state, {
        pets: [
          ...state.pets.slice(0, removeID),
          ...state.pets.slice(removeID + 1)
        ]
      })
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render();
}

export function render(){
  let container = document.getElementById('container');
  let petsList = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`
  }).join(' ')
  container.innerHTML = `<ul>${petsList}</ul>`;

}
