export let state;

export function managePets(state = { pets: [] }, action) {
  switch(action.type){
    case 'ADD_PET':
      let myPets = Object.assign({}, state);
      myPets.pets.push(action.pet)
      return myPets;
    case 'REMOVE_PET':
      let allPets = Object.assign({}, state);
      let petsArr = allPets.pets.filter(pet => pet.id !== action.id);
      allPets.pets = petsArr;
      return allPets;
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action);
  render();
}

export function render(){
  document.innerHTML = state
}

dispatch({type: '@@INIT'})
