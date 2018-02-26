export let state;

export function managePets(state={pets: []}, action='@@INIT'){
    switch (action.type) {
        case "ADD_PET":
            return Object.assign({}, state, {pets: state.pets.concat(action.pet)});
        case "REMOVE_PET":
            const isActionId = (el) => {el.id === action.id};
            const actionPetIdx =  state.pets.findIndex((el) => el.id === action.id);
            const newPets = state.pets.slice(0, actionPetIdx).concat(state.pets.slice(actionPetIdx + 1));
            return Object.assign({}, state, {pets: newPets});
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
    document.getElementById('container').innerHTML = `<ul>${pets}</ul>`
}
