// TYPICAL ACTION:
//{type: "ADD_PET", pet: {name: 'avalanche', species: 'puppy', id: 101}}
//{type: "REMOVE_PET", id: 101}
export let state;
export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case "ADD_PET":
      return {...state, pets: [...state.pets, action.pet]}
    case "REMOVE_PET":
      const petIndex = state.pets.findIndex(pet => pet.id === action.id);
      return {...state, pets: [...state.pets.slice(0, petIndex), ...state.pets.slice(petIndex + 1)]}
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action);
  render();
}

export function render(){
  let container = document.getElementById('container');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  let petNames = state.pets.map(pet => pet.name);
  let list = document.createElement('ul');
  for (let i = 0; i < petNames.length; i++) {
    let listItem = document.createElement('li');
    listItem.innerHTML = petNames[i];
    list.appendChild(listItem);
  }
  container.appendChild(list);
}

// dispatch({type: '@@INIT'});
