export let state;

export function removePet(pets, id) {
	const removalIndex = pets.findIndex(pet => pet.id === id);
	return {
		pets: [
				...pets.slice(0, removalIndex),
				...pets.slice(removalIndex + 1)
		]
	};
}

export function managePets(state = {pets: []}, action){
	switch (action.type) {
      case 'ADD_PET':
        return { pets: [...state.pets, action.pet]  }

      case 'REMOVE_PET':
      	return removePet(state.pets, action.id)
      default:
        return state;
    }
}

export function dispatch(action){
	state = managePets(state, action)
	render()
}

export function render(){
	let container = document.getElementById('container');
  let petsList = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`;
  }).join(' ');
  container.innerHTML = `<ul>${petsList}</ul>`;
}
