export let state;


export function managePets(state = { pets: []}, action){

  switch (action.type) {

      case 'ADD_PET':
        {
          return Object.assign({}, state, {
            pets: [...state.pets,action.pet]
          })}
      case 'REMOVE_PET':
        {
          return Object.assign({}, state, {
            pets: state.pets.filter(pet => pet.id !== action.id)
          })}
      default:
        return state;
    }
}

export function dispatch(action){
  state = managePets(state, action)
    render()
}

function buildHTML(name) {
  return `<li>${name}</li>`
}

export function render(){
 let container = document.getElementById('container');
 let petsList = state.pets.map((pet) => {
   return buildHTML(pet.name);
 }).join(' ');
 container.innerHTML = `<ul>${petsList}</ul>`;
  }
