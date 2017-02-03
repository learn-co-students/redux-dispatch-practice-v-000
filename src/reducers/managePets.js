export let state;

let defaultState = {pets: []};

export function managePets(state = defaultState, action){
  switch(action.type) {
    case "ADD_PET":
      let pet = action.payload;
      return {...state, pets: [...state.pets, pet]};
    case "REMOVE_PET":
      let indexToRemove = state.pets
        .findIndex(pet => pet.id === action.payload);

      let pets = [
        ...state.pets.slice(0, indexToRemove),
        ...state.pets.slice(indexToRemove + 1)
      ];

      return {...state, pets: pets};
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let container = document.getElementById('container')
  let petsLis = state.pets.map(function(pet){
    return `<li>${pet.name}</li>`
  })
  let joinedLis = petsLis.join(' ')
  container.innerHtml = `<ul>${joinedLis}</ul>`

}
