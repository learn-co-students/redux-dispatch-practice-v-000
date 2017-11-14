export let state;

export function managePets(state = {pets: []}, action){
  switch (action.type) {

    case '!type': 
      !Object.keys(state).includes(action.type)
      return state

    case 'ADD_PET':
      return Object.assign({}, ...state, {
        pets: [
          ...state.pets, 
          action.pet
        ]
      });
    
    case 'REMOVE_PET':
      const unpet_id = state.pets.findIndex(pet => pet.id === action.id)
      return Object.assign({}, state, {
        pets: [
          ...state.pets.slice(0, unpet_id),
          ...state.pets.slice(unpet_id + 1)
        ]
      })
      
    default: 
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let container = document.getElementById('container');
  let pets = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`
  }).join(' ');
  container.innerHTML = `<ul>${pets}</ul>`;
}
