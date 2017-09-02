export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      return {pets: state.pets.filter(function(p){
        return p.id !== action.id ? p : null
      })}
    default:
      return state;
  }
}

export function dispatch(action){
    state = managePets(state, action);
    render()
}

export function render(){
  var petNames = state.pets.map(function(p){
    return `<li>${p.name}</li>`
  }).join('')
    document.getElementById('container').innerHTML = `<ul>${petNames}</ul>`;
  }
