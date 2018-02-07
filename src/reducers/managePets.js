export let state;

export function managePets(state = { pets: [] }, action) {
  switch (action.type) {
    case 'ADD_PET':
      return Object.assign({}, state, {
        pets: [
          ...state.pets, action.pet
        ]
      });

    case 'REMOVE_PET':
      let petIndexNum = state.pets.map(pet => pet.id).indexOf(action.id);
      return Object.assign({}, state, {
        pets: [
          ...state.pets.slice(0, petIndexNum),
          ...state.pets.slice(petIndexNum + 1)
        ]
      });

    default:
      return state; 
  }
}

export function dispatch(action){
  state = managePets(state, action) 
  render()
}

export function render(){
  let petList = '<ul>';
  petList += state.pets.map(pet => `<li>${pet.name}</li>`);
  petList += '</ul>';
  document.getElementById('container').innerHTML = petList;
}


