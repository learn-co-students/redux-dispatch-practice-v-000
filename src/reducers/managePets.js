export let state;

export function managePets(state = { pets: [] }, action){
  switch (action.type) {
    case 'ADD_PET':
      return Object.assign({}, state, {pets: [...state.pets, action.pet]})
    case 'REMOVE_PET':
      return Object.assign({}, state, {pets: [...state.pets.filter(function(el){ return el.id !== action.id})]})
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state,action)
  render()
}

export function render(){
  var container = document.getElementById('container')
  return container.innerHTML = state.pets.map(function(pet){
    return "<ul><li>" + pet.name + "</ul></li>"
  })
}
