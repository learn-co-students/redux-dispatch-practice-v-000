export let state;


export const managePets =(state = {pets:[],}, action) =>{
  switch(action.type){
    case "ADD_PET":
      return {...state, pets:[...state.pets, action.pet]};
    case "REMOVE_PET":
      var removeIndex = state.pets.findIndex(pet => pet.id === action.id)
      return {...state, pets:[...state.pets.slice(0, removeIndex), ...state.pets.slice(removeIndex+1)]};
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  var container = document.getElementById("container");
  var petsList = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`;
  }).join(' ');
  container.innerHTML = '<ul>' + petsList + '</ul>';
}
