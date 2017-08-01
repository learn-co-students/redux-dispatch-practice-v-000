export let state;


export function managePets(state = {pets: []}, action){
    switch (action.type) {
        case 'ADD_PET':
            return {pets: [...state.pets, {name: action.pet.name, species: action.pet.species, id: action.pet.id}]}
        case 'REMOVE_PET':
            return {pets: state.pets.filter(obj => {return obj.id !== action.id})}
        default:
            return state;
    }
}

export function dispatch(action){
    state = managePets(state, action)
    render()
}

export function render(){
    var container = document.getElementById('container')

    var petLi = state.pets.map(function(obj) {
        return `<li>${obj.name}</li>`
    }).join(' ');

    container.innerHTML = `<ul>${petLi}</ul>`
}
