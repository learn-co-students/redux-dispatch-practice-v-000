export let state;


export function managePets(state = {pets: []}, action){
  switch(action.type) {
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      const pet = state.pets.filter((pet)=> pet.type !== action.type && pet.id !== action.id)
      return {pets: pet}
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  const list = state.pets.map((pet) => `<li>${pet.name}</li>`)
  document.getElementById('container').innerHTML = `<ul>${list}</ul>`
}
