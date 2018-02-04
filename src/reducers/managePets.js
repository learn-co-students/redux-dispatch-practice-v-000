export let state;


export function managePets(state = {pets: []}, action){
    switch(action.type) {
        case 'ADD_PET':
            let pets = state.pets.map(pet => pet);
            pets.push(action.pet);
            return { pets: pets };
        case 'REMOVE_PET':
            let petsReduced = state.pets.filter(pet => pet.id != action.id);
            return { pets: petsReduced };
        default:
            return state;
    }
}

export function dispatch(action){
   state = managePets(state, action)
   render()
}

export function render(){
    const petsList = state.pets.map(pet => `<li>${pet.name}</li>`)   
    document.getElementById("container").innerHTML = `<ul>${petsList}</ul>`
}
