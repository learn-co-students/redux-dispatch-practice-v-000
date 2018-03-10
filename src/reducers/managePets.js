export let state;


export function managePets(state = { pets: [] }, action){
	switch (action.type){
		case "ADD_PET":
			return {...state, pets: [...state.pets, action.pet]}
		case "REMOVE_PET":
			return {...state, pets: [...state.pets.filter(pet => pet.id !== action.id)]}
		default:
			return state
	}
}

export function dispatch(action){
	state = managePets(state, action)
	render()
}

let divs = '<div id="container"></div>'
export function render(){
	document.innerHTML = divs
	document.getElementById('container').innerHTML = makePetHtml(state.pets)
}

function makePetHtml(pets){
	return '<ul>'+pets.map(pet => '<li>'+pet.name+'</li>')+'</ul>'
}