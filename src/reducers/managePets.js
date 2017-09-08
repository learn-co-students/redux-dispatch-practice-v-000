export let state;


export function managePets(state = {pets: []}, action){

    switch (action.type) {

        case 'ADD_PET':
            return Object.assign({}, state, {
                pets: [
                    ...state.pets,
                    action.pet
                ]
            })
            // return {pets: [...state.pets, action.pet]}
        case 'REMOVE_PET':
            return {pets: state.pets.filter(pet => action.id !== pet.id)}
        default:
            return state
    }
}

export function dispatch(action){
    state = managePets(state, action)
    render()
}

export function render(){
    const petLi = state.pets.map(pet => `<li>${pet.name}</li>`)
    document.getElementById('container').innerHTML = `<ul>${petLi}</ul>`
}
