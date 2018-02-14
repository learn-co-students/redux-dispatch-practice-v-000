export let state;


function managePets(state = { pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
      {
        return Object.assign({}, state, {
          pets: [...state.pets,action.pet]
        })}
    case 'REMOVE_PET':
      {
        return Object.assign({}, state, {
          pets: state.pets.filter(pet => pet.id !== action.id)
        })}
    default:
      return state;
  }
}

function dispatch(action){
  state = managePets(state, action)
  render()
}
 
function render(){
	// let container = document.getElementById('container');
	// container.innerHtml(`<ul>state.pets.map((pet, index) => <li key={index}>{pet.name}</li>) </ul>`)
}
 
dispatch({type: '@@INIT'})


