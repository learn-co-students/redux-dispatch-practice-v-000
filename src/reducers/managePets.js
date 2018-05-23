export let state;


export function managePets(state = {pets: []}, action){
	switch (action.type) {
		case 'ADD_PET':
			return Object.assign({}, state, {
				pets: [...state.pets, action.pet]
			});
		case 'REMOVE_PET':
			const removalIndex = state.pets.findIndex(pet => pet.id === action.id);
			return Object.assign({}, state, {
				pets: [
				...state.pets.slice(0, removalIndex), ...state.pets.slice(removalIndex+1)
				]
			})	
		default:
			return state;
	}
}

export function dispatch(action){
	state =  managePets(state, action)
	render()
}

export const render = () => {
	let container = document.getElementById('container');
	
}

dispatch({type: '@@init' })
