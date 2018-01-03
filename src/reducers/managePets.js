export let state;

export function managePets(state = {pets:  []}, action){
  switch (action.type){
    case 'ADD_PET':
      return {...state, pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      return {...state, pets: state.pets.filter((pet) => pet.id !== action.id)}
    default:
      return state
    }
}

export function dispatch(action){
  state = managePets(state, action);
  render();
}

export function render(){
  let petList = '<ul>'
  for (let pet of state.pets){
    petList += `<li>${pet.name}</li>`
  }
  petList += '</ul>'
  let container = document.getElementById('container')
  container.innerHTML = petList
}

// dispatch({type:'@@'})
