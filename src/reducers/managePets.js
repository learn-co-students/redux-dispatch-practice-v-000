export let state;


export function managePets(state={pets: []}, action) {
  switch(action.type) {
    case 'ADD_PET':
      return {...state, pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      return {...state, pets: state.pets.filter(pet => pet.id !== action.id)}
    default:
      return state
  }
}


export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let petNames = "<ul>"
  state.pets.map(pet => petNames += "<li>" + pet.name + "</li>")
  petNames += "</ul>"
  document.getElementById("container").innerHTML = petNames
}