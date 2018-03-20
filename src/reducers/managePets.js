export let state

export function managePets(state = { pets: [] }, action) {
  switch (action.type) {
    case "ADD_PET":
      let pets = [...state.pets, action.pet]
      return { ...state, pets: pets }

    case "REMOVE_PET":
      let matchingPets = state.pets.filter(pet => pet.id !== action.id)
      return { ...state, pets: matchingPets }
    default:
      return state
  }
}

export function dispatch(action) {
  state = managePets(state, action)
  render()
}

export function render() {
  let container = document.getElementById("container")
  let petList = state.pets
    .map(pet => {
      return `<li>${pet.name}</li>`
    })
    .join(" ")

  console.log(petList)
  container.innerHTML = `<ul>${petList}</ul>`
}

// dispatch({ type: "@@INIT" })
