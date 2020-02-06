export let state;

export function managePets(state = { pets: [] }, action) {
  switch(action.type){
    case 'ADD_PET':
      const pet = Object.assign({}, action.pet);
      return { pets: state.pets.concat(pet) };
    case 'REMOVE_PET':
      const pets = state.pets.filter(pet => pet.id !== action.id);
      return { pets };
    default:
      return state;
  }
};

export function dispatch(action){
  state = managePets(state, action);
  render();
}

export function render(){
  var container = document.getElementById('container');
  let petName = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`;
  }).join(' ');
  container.innerHTML = `<ul>${petName}</ul>`
}
