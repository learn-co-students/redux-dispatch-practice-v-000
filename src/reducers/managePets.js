export let state;
  //
  // pet: { name: 'avalanche', species: 'puppy', id: 101 } }
  // { pets: [ { name: 'Splash', type: 'turtle', id: 100 }, { name: 'avalanche', species: 'puppy', id: 101 } ] }
export function managePets(state = {pets:[]}, action){
  switch(action.type){
      case 'ADD_PET':
        return {
          ...state,
            pets:[
              ...state.pets,
              action.pet
            ]};
      case 'REMOVE_PET':
        return {
          ...state,
          pets:
            state.pets.filter( (pet) => pet.id !== action.id)
        }
      default:
      return state;
  }

}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let container = document.getElementById('main');
 let petsList = state.pets.map((pet) => {
   return `<li>${pet.name}</li>`;
 }).join(' ');
 container.innerHTML = `<ul>${petsList}</ul>`;
}
