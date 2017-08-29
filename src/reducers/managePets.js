import jsdom from 'jsdom';

export let state;

export function managePets(state = {pets: []}, action){

  switch (action.type) {
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      return {pets: state.pets.filter((pet) => pet.id!=action.id)}
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action);
  render();
}

export function render() {

  let pet_names = state.pets.map( (pet) => '<li>' + pet.name + '</li>' );

  global.document = jsdom.jsdom('<html><body><div id="container"></div></body></html>');

  global.document.getElementById("container").innerHTML = '<ul>' + pet_names.join("\n") + '</ul>';
}
