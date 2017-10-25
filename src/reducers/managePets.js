export let state;

export function managePets(state={pets: []}, action){
  switch(action.type){
    case 'ADD_PET':
      return {pets: state.pets.concat(action.pet)}
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
  var node = '<ul>'
  var petnode = state.pets.map((p) => {
    return `<li>${p.name}</li>`
  })
  node = node + (petnode.join('')) + '</ul>';
  document.getElementById("container").innerHTML = node
}
