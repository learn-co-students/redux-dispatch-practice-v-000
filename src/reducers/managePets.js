export let state;


export function managePets(state = {pets: []}, action) {
	switch (action.type) {
	  case "ADD_PET": state.pets.push(action.pet)
	    return state
	  case "REMOVE_PET": var newPets = state.pets.filter((pet) => {return pet.id !== action.id})
	    return {pets: newPets}
	 default: return state
	}
}

export function dispatch(action){
	state = managePets(state, action)
	render()
}

export function render(){
  let list = '<ul>'
  state.pets.map((pet) => list += (`<li>${pet.name}</li>`))
  list += '</ul>'
  document.getElementById("container").innerHTML = list
}
