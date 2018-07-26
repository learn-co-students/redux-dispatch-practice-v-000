export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case "ADD_PET":
    return {
      ...state,
      pets: [
        ...state.pets,
        action.pet
      ]
    };

    case "REMOVE_PET":
      return {pets: state.pets.filter(pet => pet.id !== action.id)}

    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let template = state.pets.map(pet =>{return `<li>${pet.name}</li>`}).join('')

  document.getElementById('container').innerHTML = `<ul>${template}</ul>`
}
