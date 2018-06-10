export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
      return Object.assign(
        {},
        state,
        {pets:[
          ...state.pets,
          action.pet]
        }
      )
    case 'REMOVE_PET':
      let indexToRemove = state.pets.findIndex(pet => pet.id === action.id)
      return Object.assign(
        {},
        state,
        {pets:
          [...state.pets.slice(0, indexToRemove),
            ...state.pets.slice(indexToRemove + 1)]}
      )
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export const render = () => {
  let container = document.getElementById('container');
  let petsList = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`;
  }).join(' ');
  container.innerHTML = `<ul>${petsList}</ul>`;
}

// export function render(){
//   let htmlToRender = '<ul>'
//   for (var pet in state.pets) {
//     htmlToRender += '<li>' + pet.name + '</li>'
//   }
//   htmlToRender += '</ul>'
//   document.getElementById('container').innerHTML = htmlToRender
//
// }
