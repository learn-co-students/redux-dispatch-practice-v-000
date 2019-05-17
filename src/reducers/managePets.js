export let state;


export function managePets(state = {pets: []}, action){
	switch(action.type) {
		case 'ADD_PET': 
		return {...state, pets: [
			...state.pets, action.pet]}

		case 'REMOVE_PET':
			const pet = state.pets.findIndex(p => p.id === action.id)
			return {...state, pets: [
				...state.pets.slice(0, pet), ...state.pets.slice(pet + 1)]}


		default: 
			return state
	}
}

export function dispatch(action) {
	state = managePets(state, action)
	render()
}

export function render(){
	let container = document.getElementById('container')
	let list = state.pets.map(pet => {
		return `<li>${pet.name}</li>`
	}).join(' ');
	container.innerHTML = `<ul>${list}</ul>`


}
 