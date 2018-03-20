export let state;

export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case 'ADD_PET': 
      return {pets: [...state.pets, action.pet]}
    case 'REMOVE_PET': 
      return {pets: state.pets.filter(pet => pet.id !== action.id)}
    default: 
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  const container = document.getElementById('container')
  const petNames = state.pets.map(pet => `<li>${pet.name}</li>`).join(' ')

  return container.innerHTML = `<ul>${petNames}</ul>`
}


//we have an array of pet objects
//we want to display <li>${pet.name}</li> inside a <ul /> within a container element 
//it's probably best to dry up the code

