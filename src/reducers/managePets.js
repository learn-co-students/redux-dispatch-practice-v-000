export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case "ADD_PET":
      return Object.assign({}, state, state.pets.push(action.pet))

      case "REMOVE_PET":
      return Object.assign({}, state, {pets: state.pets.filter(pet => action.id != pet.id)})

    default:
      return state
  }


}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let container = document.getElementById('container')
  let petList = '<ul>' + state.pets.map(pet => '<li>' + pet.name + '</li>').join(",") + "</ul>"
  container.innerHTML = petList
}
