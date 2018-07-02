export let state;

// build out remove pet function
export function byePet(pets, id){
const letGo = pets.findIndex(pet => pet.id === id);
return {
  pets: [
    ...pets.slice(0, letGo),
    ...pets.slice(letGo + 1)
    ]
  };
}

export function managePets(state = {pets: []}, action){
  switch(action.type) {
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet]};
      // returns existing state.
    case 'REMOVE_PET':
      return byePet(state.pets, action.id)
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let container = document.getElementById('container');
  let petList = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`;
  }).join(' ');
  container.innerHTML = `<ul>${petList}</ul>`;
};
