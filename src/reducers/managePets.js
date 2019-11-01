export let state;


export function managePets( state = { pets: [] }, action ){

    switch (action.type) {
        case 'ADD_PET':
            let newState = {...state, pets: [ ...state.pets, action.pet ]}
            return newState

        case 'REMOVE_PET':
            let removeFromState = {...state, pets: state.pets.filter(function(obj){
                return obj.id !== action.id
                })
            }
            return removeFromState

        default:
            return state;
    }
}

export function dispatch( action ){
    state = managePets(state, action)
    render()
}

export function render(){
    let container = document.getElementById('container')
    let petsList = state.pets.map((pet) => { return `<li>${pet.name}</li>` }).join(' ')
    container.innerHTML = `<ul>${petsList}</ul>`
}
