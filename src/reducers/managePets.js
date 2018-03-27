export let state;


export function managePets(state = { pets: [] }, action){
      switch (action.type) {

        case 'ADD_PET':
          let petList = [...state.pets, action.pet]
          return { ...state, pets: petList }

        case 'REMOVE_PET':
          let deletedPet = state.pets.filter(
            pet => pet.id !== action.id
          )
          return { ...state, pets: deletedPet }

        default:
          return state;
      }

}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render() {
  let container = document.getElementById("container")
  let petList = state.pets.map(pet => {
      return `<li>${pet.name}</li>`
    }).join(" ")

  console.log(petList)
  container.innerHTML = `<ul>${petList}</ul>`
}
