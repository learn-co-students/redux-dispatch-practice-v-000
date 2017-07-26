export let state;


export function managePets(state = { pets: [] }, action){
	switch (action.type) 
	{
		case 'ADD_PET':
			return {pets: [...state.pets, action.pet]};
		case 'REMOVE_PET':
			let idx = state.pets.findIndex(pet => pet.id === action.id);
			return Object.assign({}, state, {
				pets: [
				...state.pets.slice(0, idx),
				...state.pets.slice(idx + 1)
				]});
		default:
			return state;
	}
}

export function dispatch(action){
	state = managePets(state, action);
	render();
}

export function render(){
	let mainDoc = document.getElementById("container");
	let html = '<ul>' + state.pets.map((pet) => {return `<li>${pet.name}</li>`}).join(' ') + '</ul>';
	mainDoc.innerHTML = html;
}
