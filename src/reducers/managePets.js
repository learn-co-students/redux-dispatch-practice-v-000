export let state;


export const managePets = (state ={
  pets: [],
 }, action) => {
  
  switch (action.type){
    case 'ADD_PET':
    return {... state, pets: [...state.pets,
    action.pet]}
    case 'REMOVE_PET':
    
    const pets = state.pets.findIndex(pet => pet.id === action.id)
    return {... state,
      pets: [
        ...state.pets.slice(0, pets),
        ...state.pets.slice(pets +1)
      ]}
      default: return state
    }
  }  

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let main = document.getElementById('container')
  let petlist = state.pets.map(pet => {return `<li>${pet.name}</li>`})
  main.innerHTML = `<ul>${petlist}</ul>`
}
