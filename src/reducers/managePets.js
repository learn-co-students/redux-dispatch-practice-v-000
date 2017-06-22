export let state;

//needs to have a sensible default state
export function managePets(state = { pets: [] }, action){
  switch (action.type) {
    case 'ADD_PET':
      state.pets.push(action.pet)
      return {pets: state.pets}
    case 'REMOVE_PET':
      var index = state.pets.findIndex(pet => pet.id === action.id)
      return Object.assign({}, state, {
        pets: [
          ...state.pets.slice(0, index),
          ...state.pets.slice(index+1)
        ]
      });
    default:
      return state;
  }
}

//should pass an action to the reducer and use that return value to update the state, a globally accessible variable
export function dispatch(action){
  state = managePets(state, action)
  render()
}

//inserts a <ul> to the DOM with each pet's name wrapped in an <li>. The <ul> should be a child of an element with the id of container. There's no need to load jQuery into our app for such a small task. We can make use of built-in JavaScript methods like document.getElementById
export function render(){
  let code = '';
  for (let i = 0; i < state.pets.length; i++) {
    code += "<li>" + state.pets[i].name + "</li>"
  }
  document.getElementById('container').innerHTML = "<ul>" + code + "</ul>"
}
