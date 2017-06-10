export let state;


export function managePets(state = {pets: []},action){
    let newPets = state.pets.splice();
    switch(action.type) {
        case "ADD_PET":

            return {
                ...state,
                pets: [
                ...state.pets,
                action.pet
                ]
            }
            case "REMOVE_PET":
            let indexToRemove = state.pets.findIndex( pet => {
                return pet.id === action.id
            })

            return {
                ...state, 
                pets: [
                ...state.pets.slice(0, indexToRemove),
                ...state.pets.slice(indexToRemove + 1)
                ]
            }
            default:
            return state;
    }
}

export function dispatch(action){
    state = managePets(state, action)
    render();
}

export function render(){
    let petsList = state.pets.reduce( (list, pet) => {
        return list + "<li>" + pet.name + "</li>"
    }, '')
    petsList = "<ul>" + petsList + "</ul>"
    document.getElementById('container').innerHTML = petsList;
}
