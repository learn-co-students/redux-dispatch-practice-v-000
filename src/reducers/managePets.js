export let state;


export function managePets(state = {pets: []}, action) {
	switch(action.type) {
		case 'ADD_PET':
			return {...state, pets: [...state.pets, action.pet]}
		case 'REMOVE_PET':
			let pets = state.pets.filter(pet => pet.id != action.id)
			return {...state, pets}
		default:
			return state
	}
}

export function dispatch(action) {
	state = managePets(state, action)
	render()
}

export function render(){
	const html = `<ul>${state.pets.map(pet => "<li>" + pet.name + "</li>")}</ul>`
	document.getElementById('container').innerHTML = html
}
