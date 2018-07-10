export let state;


export function managePets(state = {pets: []}, action){
  switch(action.type){
    case "ADD_PET":
      return Object.assign({}, {pets: state.pets.concat(action.pet)})
      break;
    case "REMOVE_PET":
      return Object.assign({}, {pets: state.pets.filter(pet => pet.id !== action.id)})
      break;
    default:
      return state
  }

}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let pets = ""
  state.pets.forEach(function(pet){
    pets += "<li>" + pet.name + "</li>"
  })

  document.getElementById("container").innerHTML = "<ul>" + pets + "</ul>"
}
