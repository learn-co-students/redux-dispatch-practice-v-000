export let state;

export function managePets(state = {pets: []}, action) {
  switch (action.type) {
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet]};
    case 'REMOVE_PET':
      return {pets: state.pets.filter(pet => pet.id !== action.id)};
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render();
}

export function render(){
  const petList = state.pets;
  let petHTML = '<ul>'

  for (let pet of petList) {
    petHTML += '<li>' + pet.name + '</li>';
  }

  petHTML += '</ul>'

  document.getElementById('container').innerHTML = petHTML;
}
