
export let state;

export function managePets(state = {pets: [],}, action) {
  switch (action.type) {
    case 'ADD_PET':
      let newState = Object.assign({}, state, {});
      newState.pets.push(action.pet);
      return newState
    case 'REMOVE_PET':
      let removalIndex = state.pets.findIndex(pet => pet.id === action.id)
      return Object.assign({}, state, {
        pets: [
          ...state.pets.slice(0, removalIndex),
          ...state.pets.slice(removalIndex +1)
        ]
      });
    default:
      return state;
  }
};

export function dispatch(action){
  state = managePets(state, action);
  render();
}

export function render(){
  var lis = state.pets.map(pet =>
    `<li>${pet.name}</li>`
  ).join(' ');
  var list = "<ul>" + lis + "</ul>";
  var container = document.getElementById("container");
  container.innerHTML = list
}
