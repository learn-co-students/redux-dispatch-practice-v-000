export let state;


export function managePets(state={pets:[]},action){
  switch(action.type){
    case 'ADD_PET':
      return {...state,pets:[...state.pets,action.pet]}
    case 'REMOVE_PET':
    const pets = state.pets.filter(pet => pet.id !== action.id);
      return {pets}
    default:
      return state;
  }
}

export const dispatch=(action)=>{
  state = managePets(state,action);
  render();
}

export const render = () => {
  let petsList = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`;
  }).join(' ');
  document.getElementById('container').innerHTML = `<ul>${petsList}</ul>`;
}
