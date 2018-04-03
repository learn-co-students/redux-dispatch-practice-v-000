export let state;


export function managePets(state = { pets: [] }, action){
  switch (action.type) {
    case 'ADD_PET':
      return { pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      let i = state.pets.findIndex(pet => pet.id === action.id)
      return { pets: [...state.pets.slice(0,i), ...state.pets.slice(i + 1)]}
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  state.pets.forEach( pet => {
    document.getElementById('container').innerHTML = `<ul><li>${pet.name}</li></ul>`
  })
}