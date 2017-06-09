export let state;

export function managePets(state = {pets: []}, action){
	switch(action.type){
		case 'ADD_PET':
			return {pets: [...state.pets, action.pet]}
		case 'REMOVE_PET':
			var index = state.pets.map(pet => {return pet.id}).indexOf(action.id)
			return {pets:[ ...state.pets.slice(0, index), ...state.pets.slice(index+1)]}
		default:
			return state;
	}
}

export function dispatch(action){
	state = managePets(state, action)
	render()
}

export function render(){
	var container = document.getElementById('container');
 
}

dispatch({type: '@@INIT'})