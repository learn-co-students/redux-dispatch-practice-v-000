export let state;

const initialState = () => ({ pets: [] })

const buildList = pets => {
  return `<ul>${pets.map(pet => `<li>${pet.name}</li>`).join('')}</ul>`
}

export function managePets(state = initialState(), action){
  switch(action.type) {
    case 'ADD_PET':
      return Object.assign(
        {},
        state,
        { pets: state.pets.concat(action.pet) }
      )
    case 'REMOVE_PET':
      return Object.assign(
        {},
        state,
        { pets: state.pets.filter(pet => pet.id !== action.id) }
      )
    default:
      return state
  }

}

export function dispatch(action) {
  state = managePets(state, action)
  render()
}

export function render(){
  let container = document.getElementById('container')
  container.innerHTML = buildList(state.pets)
}
