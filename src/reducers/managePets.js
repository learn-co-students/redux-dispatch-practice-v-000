export let state;


export function managePets(state = {pets: []}, action){
  switch(action.type){

    case 'ADD_PET':
      return {...state, pets: state.pets.concat(action.pet)}

    case 'REMOVE_PET':
      let index = state.pets.findIndex(pet => pet.id === action.id)
      let pets = [...state.pets]
      pets.splice(index, 1)
      return {...state, pets: pets}

    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let list = state.pets.map(pet => { return (`<li>${pet.name}</li>`) }).join(' ')
  document.getElementById('container').innerHTML = `<ul>${list}</ul>`
}
