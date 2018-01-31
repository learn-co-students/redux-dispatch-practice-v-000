export let state;


export function managePets(state= {pets: []}, action){
    switch (action.type) {
 
        case 'ADD_PET':
            return Object.assign({}, state, { pets: [...state.pets, action.pet] })
        case 'REMOVE_PET': 
            let filteredPets = state.pets.filter( pet => pet.id !== action.id )
            return Object.assign({}, state, {pets: [...filteredPets]}) 
        default: 
            return state;
    }
}

export function dispatch(action){ 
    state = managePets(state, action)
    render()
}

export function render(){ 
    document.getElementById("container").innerHTML = `<ul><li>${state.pets.map(pet => pet.name)}</li></ul>`
}
