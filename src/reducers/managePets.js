export let state;

export function managePets(state = {pets: []}, action){
  switch(action.type) {
    case 'ADD_PET':
      return {...state, pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      return {...state, pets: state.pets.filter(x => x.id !== action.id)}
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let pets = state.pets.map(pet => `<li>${pet.name}</li>`);
  let container = document.getElementById('container');
  container.innerHTML = `<ul>${pets}</ul>`
}
