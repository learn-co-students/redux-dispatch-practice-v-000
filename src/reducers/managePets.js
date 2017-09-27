export let state;


export function managePets(state={pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
      let newPet = action.pet
      let allPets = [...state.pets, newPet]
      return {pets: allPets}
    case 'REMOVE_PET':
      return Object.assign({}, state, {
        pets: state.pets.filter(function(obj) {
          return obj.id !== action.id
        })
      })
    default:
      return state

  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let petsList = state.pets.map(function(pet) {
    return `<li>${pet.name}</li>`
  })
  let html = `<ul>${petsList.join('')}</ul>`
  document.getElementById('container').innerHTML = html
}
