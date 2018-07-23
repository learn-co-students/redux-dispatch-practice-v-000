export let state;

export const managePets = (state = {pets: []}, action) => {
  switch(action.type) {
    case 'ADD_PET':
      return {...state, pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      const index = state.pets.findIndex(pet => pet.id === action.id)
      return {...state,
        pets: [...state.pets.slice(0, index), ...state.pets.slice(index + 1)]
      }
    default:
      return state;
  }
}

export const dispatch = (action) => {
  state = managePets(state, action)
  render()
}

export const render = () => {
  const container = document.getElementById('container')
  const petsHTML = state.pets.map((pet) => {return `<li>${pet.name}</li>`}).join(' ');
  container.innerHTML = `<ul>${petsHTML}</ul>`
}
