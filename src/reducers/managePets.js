export let state;

export function managePets(state = {pets: []}, action){
    switch (action.type) {
        case 'ADD_PET':
            return {
                pets: [
                    ...state.pets, action.pet
                ]
            }
        case 'REMOVE_PET':
            return {
                pets: state.pets.filter(pet => action.id !== pet.id)
            }
        default:
            return state;
    }
}

export function render(){
    let list = state.pets.map((pet) => {
        return `<li>${pet.name}</li>`
      }).join(" ")
    document.getElementById('container').innerHTML = `<ul>${list}</ul>`;
}

export function dispatch(action){
    state = managePets(state, action)
    render()
}

