export let state;


export function managePets(state = {pets:[]}, action) {
  switch (action.type) {
    case 'ADD_PET':
      return {...state, pets: [...state.pets, action.pet]} 
      // Object.assign({}, state, {pets:[...state.pets, action.pets]})
    case 'REMOVE_PET':
      const getIndex = state.pets.findIndex(p => p.id === action.id);
      return {...state, pets: [...state.pets.slice(0, getIndex), ...state.pets.slice(getIndex + 1)]}
      // Object.assign({}, state, {pets: [...state.pets.slice(0, getIndex), ...state.pets.slice(getIndex + 1)]})
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render();
}

export function render(){
  let container = document.getElementById('container');
  let petsList = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`
  })
  container.innerHTML = `<ul>${petsList}</ul>`  
}


// return Object.assign({}, state, {friends:[...state.friends, action.friend]})
// const getIndex = state.friends.findIndex(f => f.id === action.id)
// return Object.assign({}, state, {friends:
//   [...state.friends.slice(0, getIndex),
//    ...state.friends.slice(getIndex + 1 )]
//   })