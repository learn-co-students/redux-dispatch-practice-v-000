export let state;


export function managePets(state = { pets: [] }, action){

  switch (action.type) {

    case 'ADD_PET':
      // return { pets: [...state.pets, action.pet]}
      return Object.assign({}, state, {pets: [...state.pets, action.pet]})


    case 'REMOVE_PET':
      // return --- something revolving slice. Find the index of the object you want to remove. Slice the array up until that point. Then slice everything after that.
      let removeIndex = state.pets.findIndex(pet => pet.id === action.id);
      return Object.assign({}, state, {pets: [
        ...state.pets.slice(0, removeIndex),
        ...state.pets.slice(removeIndex + 1)
      ]})


    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let petHTML = state.pets.map(pet => `<li>${pet.name}</li>`).join(' ')
  let petHTMLInList = `<ul>${petHTML}</ul>`
  document.getElementById('container').innerHTML = petHTMLInList
}
