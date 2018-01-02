export let state;


export function managePets(state = {pets: []}, action){
    let newState = Object.assign({}, state)
    switch (action.type) {
        case 'ADD_PET':
            newState.pets.push(action.pet)
            return newState
        case 'REMOVE_PET':
            newState.pets = newState.pets.filter(pet => pet.id !== action.id)
            return newState
        default:
            return state
    }
}

export function dispatch(action){
    state = managePets(state, action)
    render()
}

export function render(){
  let container = document.getElementById("container");
  let petsList = state.pets
    .map(pet => {
      return `<li>${pet.name}</li>`;
    })
    .join(" ");
  container.innerHTML = `<ul>${petsList}</ul>`;
}
