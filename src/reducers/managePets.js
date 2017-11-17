export let state;


export function managePets(state = { pets: [] }, action ){
    switch (action.type) {
        case 'ADD_PET':
            return { ...state, pets: [
                ...state.pets, {
                    name: action.pet.name,
                    species: action.pet.species,
                    id: action.pet.id
                }
            ] }
        case 'REMOVE_PET':
                
                const newPets = state.pets.filter((pet) => pet.id !== action.id)
                return { ...state, pets: newPets }
            

        default:
            return state
    }
}

export function dispatch(action){
    state = managePets(state, action)
    render()
}

export function render(){
    const lis = state.pets.map((pet) => `<li>${pet.name}</li>`).join(" ")
    document.querySelector("#container").innerHTML = `<ul>${lis}</ul>`
}
