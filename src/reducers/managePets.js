export let state;


export function managePets(state = { pets: [] }, action){
  switch (action.type) {
    case 'ADD_PET':
      return {
        pets: [...state.pets, action.pet]
      }
    case 'REMOVE_PET':
      return {
        pets: state.pets.filter((elem) => (elem.id !== action.id))
      }
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render();
}

export function render(){
  let html = "<ul>"
  html += state.pets.map((elem) => `<li>${elem.name}</li>`)
  html += "</ul>"

  document.getElementById('container').innerHTML = html;
}
