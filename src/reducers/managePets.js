export let state;


export function managePets(state = { pets: [] }, action){
  switch (action.type) {
    case 'ADD_PET':
      return {...state, pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      const petAry = state.pets.filter(pet => pet.id != action.id)
      return {...state, pets: petAry}
    default:
      return state;
  }
}


//pass an action to the reducer, use return value to update the state
export function dispatch(action){ 
  state = managePets(state, action);
  render();
}


export function render(){
  let pets = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`
  });
  document.getElementById("container").innerHTML = `<ul>${pets}</ul>`;

}

