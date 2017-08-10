export let state;


export function managePets(state={pets: []}, action){
  switch(action.type){
    case "ADD_PET":
      return Object.assign({}, state, {
        pets: [
          ...state.pets,
          action.pet
        ]
      })
    case "REMOVE_PET":
      const indexToRemove = state.pets.findIndex(pet => pet.id === action.id)
      return Object.assign({}, state, {
        pets: [
          ...state.pets.slice(0, indexToRemove),
          ...state.pets.slice(indexToRemove+1)
        ]
      })
    default:
      return state;
  }

}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let container = document.getElementById('container');
  let petsList = state.pets.map(pet => (
    `<li>${pet.name}</li>`
  ))
  container.innerHTML = `<ul>${petsList}</ul>`
}
