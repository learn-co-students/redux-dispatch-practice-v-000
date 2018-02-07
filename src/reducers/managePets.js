
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

// MY RENDER NOT USING SINGLE STRING INTERPOLATION
export function render(){
  let container = document.getElementById('container');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  let list = document.createElement('ul');
  state.pets.map(pet => {
    let listItem = document.createElement('li');
    listItem.innerHTML = pet.name
    list.appendChild(listItem);
  })
  container.appendChild(list);
}

// dispatch({type: '@@INIT'});

// TYPICAL DISPATCH ACTION:
//{type: "ADD_PET", pet: {name: 'avalanche', species: 'puppy', id: 101}}
//{type: "REMOVE_PET", id: 101}

//SOLUTION'S STRING INTERPOLATION KIND OF WAY.
// export const render = () => {
//   let container = document.getElementById('container');
//   let petsList = state.pets.map((pet) => {
//     return `<li>${pet.name}</li>`;
//   }).join(' ');
//   container.innerHTML = `<ul>${petsList}</ul>`;
// }
