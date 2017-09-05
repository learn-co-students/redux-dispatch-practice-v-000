export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
      return Object.assign({}, state, {
        pets: [
          ...state.pets,
          action.pet
        ]
      });
    case 'REMOVE_PET':
      let returnArr = state.pets.filter(pet => pet.id !== action.id);
      return {pets: returnArr};
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action);
  render();
}

export function render(){
  let targetDiv = document.getElementById('container');
  let html = '';
  state.pets.forEach((pet)=>{
    html += `<li>${pet.name}</li>`
  })
  targetDiv.innerHTML = `<ul>${html}</ul>`
}
