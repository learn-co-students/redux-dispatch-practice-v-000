export let state;


export function managePets(state = {pets: []}, action){
	let pets = state.pets;
	switch (action.type) {
    	case 'ADD_PET':
    		if(action.pet["name"]) pets.push(action.pet);
      		return {pets: pets } 
	    case 'REMOVE_PET':
	    	let newPets = pets.filter(function (el) {
 				return el.id !== action.id
			});
	      	return {pets: newPets}
      	default:
        	return state;
    }
}

export function dispatch(action){
	state = managePets(state, action)
	render()
}

export function render(){
	let output = "<ul>";
	for (var i = 0; i < state.pets.length; i++) {
		output += "<li>" + state.pets[i].name + "</li>";
	}
	output += "</ul>"
	document.getElementById("container").innerHTML = output;
}
