import { stat } from "fs";

export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet ]}
    case 'REMOVE_PET':
      return {
        pets: state.pets.filter(function(pet){
          return pet.id !== action.id
        })
      }
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render();
}

export function render(){
  let content = '<ul>'
  state.pets.forEach(pet => {
    content += `<li>${pet.name}</li>`
  });
  content += '</ul>'
  console.log(content)
  document.getElementById('container').innerHTML = content
}
