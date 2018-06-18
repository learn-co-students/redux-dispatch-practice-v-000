export let state;


export function managePets(state = {pets: []}, action){
  switch(action.type) {
    case 'ADD_PET':
    return {
      ...state,
      pets: [...state.pets, action.pet]
    }

    case 'REMOVE_PET':
    const petID = state.pets.findIndex(pet => pet.id === action.id)
    return{
      ...state,
      pets: [
        ...state.pets.slice(0, petID),
        ...state.pets.slice(petID+1)
      ]
    }

    default: return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let list = state.pets.map((pet) => {return `<li>${pet.name}</li>`}).join(' ')
  let container = document.getElementById('container')
  container.innerHTML = (`<ul>${list}</ul>`)
}
