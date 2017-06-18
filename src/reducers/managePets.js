export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case "ADD_PET":
      return(
        Object.assign(
          ...state,
          { pets: [...state.pets, action.pet] }
        )
      )

    case "REMOVE_PET":

      let petToRemoveIndex = state.pets.findIndex(p => p.id === action.id)

      return(
        Object.assign(
          ...state,
          {pets:
            [
            ...state.pets.slice(0, petToRemoveIndex),
            ...state.pets.slice(petToRemoveIndex + 1)
            ]
          }
        )
      )

    default:
      return state

  }
}

export const dispatch = (action) => {
  state = managePets(state, action);
  render();
}

export const render = () => {
  let container = document.getElementById("container")
  let petList = state.pets.map( (pet) => { return `<li>${pet.name}</li>`} ).join(" ");
  container.innerHTML =  `<ul>${petList}</ul>`
}
