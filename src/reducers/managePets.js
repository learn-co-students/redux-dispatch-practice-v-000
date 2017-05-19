export let state;


export function managePets(state={pets: []}, action){
  switch(action.type){
    case 'ADD_PET':
      var newState = Object.assign({}, state);
      newState.pets.push(action.pet);
      return newState;
    case 'REMOVE_PET':
      var newState = Object.assign({}, state);
      var filtered = newState.pets.filter(p => ( p.id !== action.id ) );
      return {pets: filtered};
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
  let petsList = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`;
  }).join(' ');
  container.innerHTML = `<ul>${petsList}</ul>`;
}
