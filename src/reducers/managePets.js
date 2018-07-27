export let state;

export function managePets(state = { pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
    return { pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
    return { pets: state.pets.filter(pet => pet.id !== action.id)}
    default:
    return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let container = document.getElementById("container")
  let pets = state.pets.map(pet => {
    return `<li>${pet.name}</li>`
  }).join(" ")
  container.innerHTML = `<ul>${pets}</ul>`
}
