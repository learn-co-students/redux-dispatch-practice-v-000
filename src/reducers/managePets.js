export let state;


export function managePets(state = {pets: []},action){
    let newPets = state.pets.splice();
    switch(action.type) {
        case "ADD_PET":
            newPets = [...state.pets, action.pet]
            return {...state, pets: newPets}
        case "REMOVE_PET":
            console.log("REMOVING PET")
            let indexToRemove = state.pets.findIndex( pet => {
                return pet.id === action.id
            })
            newPets = newPets.splice(indexToRemove,1);
            return {...state, pets: newPets}
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
    petsList = "<div id='container'><ul>" + petsList + "</ul></div>"
    document.getElementById('main').setInnerHTML = petsList;
}
