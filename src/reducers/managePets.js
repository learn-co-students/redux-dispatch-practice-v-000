export let state;


// Reducer Function
export function managePets(state = { pets: [] }, action){
  switch (action.type) {
    case 'ADD_PET':
      return Object.assign({}, state, {
        pets: [
          ...state.pets,
          action.pet
        ]
      });
    case 'REMOVE_PET':
      let petIndexNum = state.pets.map(p => p.id).indexOf(action.id);
      return Object.assign({}, state, {
        pets: [
          ...state.pets.slice(0, petIndexNum),
          ...state.pets.slice(petIndexNum + 1)
        ]
      });
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render();
}

export function render(){
  let petList = '<ul>';
        petList += state.pets.map(p => `<li>${p.name}</li>`);
        petList += '</ul>';
  document.getElementById('container').innerHTML = petList;
}
