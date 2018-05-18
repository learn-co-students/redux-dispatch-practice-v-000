export let state;

export function managePets(state = {pets: []}, action){
  switch (action.type){
    case "ADD_PET":
      return {pets: [...state.pets, action.pet]}
    case "REMOVE_PET":
      let newList = state.pets.filter(pet => pet.id !== action.id)
      return {pets: newList}
    default:
      return {pets: [...state.pets]}
  }
}

export function dispatch(action){
  state = managePets(state, action);
  render();
}

export function render(){
  let strings = state.pets.map(pet => `<li>${pet.name}</li>`).join(' ');
  let html = `<ul>${strings}</ul>`
  document.getElementById('container').innerHTML = html;

}
