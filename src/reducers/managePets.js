export let state;

export function managePets(state = {pets: []}, action){
	let cloned_state = Object.assign({}, state);
	
	switch(action.type) {

		case 'ADD_PET':
			cloned_state.pets = state.pets.slice(0);
			cloned_state.pets.push(action.pet)
			return cloned_state

		case 'REMOVE_PET': 
			cloned_state.pets = state.pets.filter(pet=> pet.id != action.id)
			return cloned_state

		default:
			return state
	}
}

export function dispatch(action){
	state = managePets(state, action);
	render()
}

export function render(){
	let html = "<ul>";
	for (let pet of state.pets) {
		html += `<li>${pet.name}</li>`
	}
	html += "</ul>"
	document.getElementById('container').innerHTML = html
}

