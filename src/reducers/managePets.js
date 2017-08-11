export let state;


export function managePets(state = { pets: []}, action){
  switch (action.type) {
    case "ADD_PET":
      return {pets: [...state.pets, action.pet]}
    case "REMOVE_PET":
      let petId = action.id
      return {pets: state.pets.filter(function(pet){return pet.id !== petId})}
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  state.pets.map(pet =>
    document.getElementById("container").innerHTML = `<ul><li>${pet.name}</li></ul></div>`)
}
