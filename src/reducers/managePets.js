export let state;

export function managePets(state={pets: []}, action) {
  let pets

  switch (action.type) {
    case ('ADD_PET'):
      pets = [...state.pets, action.pet]
      return {...state, pets}

    case ('REMOVE_PET'):
      pets = state.pets.filter(pet => pet.id !== action.id)
      return {...state, pets}

    default: return state
  }
}

export function dispatch(action) {
  state = managePets(state, action)
  render()
}

export function render() {
  let container = document.getElementById('container')
  let pets = state.pets.map(pet => `<li>${pet.name}</li>`).join('')
  let html = `<ul>${pets}</ul>`
  container.innerHTML = html
}
