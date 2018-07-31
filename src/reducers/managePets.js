export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type){
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
       let filteredArray =state.pets.filter(pet => pet.id !== action.id)
      return {pets: filteredArray}

    default:
      return state

  }
}

export function dispatch(action){
  state = managePets(state,action)
  render()
}

export function render(){
  let container = document.getElementById("container")
  for(let i = 0; i < state.pets.length; i++){
    container.innerHTML= "<ul><li>" + state.pets[i].name + "</li></ul>"
  }
}
