export let state;


export function managePets(state = {pets: []}, action){
    switch (action.type) {
        case 'ADD_PET':
        var pets = [...state.pets, action.pet];
        return Object.assign({}, state, {pets});
        case 'REMOVE_PET':
        var pets = state.pets.filter(pet => pet.id != action.id)
        return Object.assign({}, state, {pets});
        default:
        return state;
    }
}

export function dispatch(action){
    state = managePets(state, action)
    render()
}

export function render(){
    document.getElementById('container').innerHTML = `<ul>${state.pets.map(pet => `<li>` + pet.name + `</li>`)}</ul>`;
}
