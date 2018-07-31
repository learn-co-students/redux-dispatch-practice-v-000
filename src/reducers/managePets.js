export let state;


export function managePets(state={pets: [],}, action){
  switch(action.type){
    case "ADD_PET":
      return {pets: [...state.pets, action.pet]}
    case "REMOVE_PET":
      return {pets: [...state.pets.filter(p => p.id !== action.id)]}
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action);
  render();
}

export function render(){
  let pets = state.pets.map((p) => {return `<li>${p.name}</li>`})
  document.getElementById('container').innerHTML = `<ul>${pets}</ul>`
}
