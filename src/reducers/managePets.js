export let state;


export function managePets(state = { pets: [] }, action){
	switch (action.type) {

		case 'ADD_PET':
			return {pets: [
				...state.pets, action.pet
				]}

		case 'REMOVE_PET':
			return {pets: state.pets.filter(pets => pets.id !== 101)}

		default:
			return state;
	}
}

export function dispatch(action){
    state = managePets(state, action)
    render()
}

export function render(){
  let container = document.getElementById('container')
  let pets = state.pets.map(pet =>
    `<li>${pet.name}</li>`)
    .join(' ');
  container.innerHTML = `<ul>${pets}</ul>`
}

