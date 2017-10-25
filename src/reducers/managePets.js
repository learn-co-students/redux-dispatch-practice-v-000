export let state;

export function managePets(state={pets: []}, action){
  switch(action.type){
    case 'ADD_PET':
      return Object.assign({}, state, {pets: state.pets.concat(action.pet)})
    case 'REMOVE_PET':
      return Object.assign({}, state, {pets: state.pets.filter(function(f) {return f.id !== action.id})})
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render ()
}

export function render(){
  let container = document.getElementById("container")
  let petsNode = state.pets.map((p) => {
    return `<li>${p.name}</li>`
  }).join('');
  container.innerHTML = `<ul>${petsNode}</ul>`
}
