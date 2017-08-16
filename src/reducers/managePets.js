export let state;


export function managePets(state = {pets:[]}, action){
  switch (action.type) {
    case 'ADD_PET':
      return Object.assign({}, state, {pets:[...state.pets, action.pet]});
    case 'REMOVE_PET':
      let index = state.pets.findIndex( element => element.id === action.id )
      return Object.assign({}, state, {pets:[...state.pets.slice(0, index), ...state.pets.slice(index + 1)]});
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action);
  render();
}

export function render(){
  // var ul = document.createElement('ul')
  //
  // for(let i = 0, l = state.pets.length; i < l; i++){
  //   let li = document.createElement('li')
  //   li.innerHTML = state.pets[i].name
  //   ul.appendChild(li)
  // }

  var li = state.pets.map( pet => {
    return `<li>${pet.name}</li>`
  }).join('')

  var container = document.getElementById('container')
  container.innerHTML = '<ul>' + li + '</ul>'

}
