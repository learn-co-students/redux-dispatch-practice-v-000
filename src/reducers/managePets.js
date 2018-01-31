export let state;

export function managePets(state = { pets: [] }, action){
    switch (action.type) {

        case 'ADD_PET':
            return {pets: [...state.pets, action.pet ]}
        case 'REMOVE_PET':
            const index = state.pets.findIndex(pet => pet.id === action.id)

            return {pets: [
                ...state.pets.slice(0, index),
                ...state.pets.slice(index + 1)
            ]}

        default:
            return state;
    }
}

export function dispatch(action){
    state = managePets(state, action);
    render();
}

export function render(){
    const pets = state.pets.map(pet => `<li>${pet.name}</li>`)
    if (document.getElementsByTagName('ul').length === 0){
        document.getElementById('container').innerHTML = `<ul>${pets}</ul>`
    } else {
        document.getElementsByTagName('ul')[0].innerHTML = pets
    }
}
