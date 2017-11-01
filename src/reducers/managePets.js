export let state;


export function managePets(state={pets: []}, action){
  switch (action.type) {

    case 'ADD_PET':
      return Object.assign({}, state, {
        pets: [
          ...state.pets,
          action.pet
        ]
      })

    case 'REMOVE_PET':
      return Object.assign({}, state, {
        pets:
          state.pets.filter(function(p){return p.id !== action.id})
      })

    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state= {pets: []}, action)
  render()
}

export function render(){
  let container = document.getElementById('container')
  let petsList = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`;
  }).join('');
  container.innerHTML = `<ul>${petsList}</ul>`
}
