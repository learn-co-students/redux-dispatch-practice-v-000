export let state;


export function managePets(state = {pets: []}, action) {
  switch (action.type) {
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      return {pets: state.pets.filter(el => el.id !== action.id)}
    default:
      return state;
  }
}

export function dispatch(action) {
  state = managePets(state, action)
  render()
}

export function render() {
  // let list = '';
  // state.pets.forEach(pet => list += `<li>${pet.name}</li>`)
  let list = state.pets.map(pet => `<li>${pet.name}</li>`).join()
  document.getElementById("container").innerHTML = `<ul>${list}</ul>`
}

// dispatch({type: @@INIT})
