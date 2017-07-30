export let state;


export function managePets(state={ pets: [] }, action){
    switch(action.type) {
        case 'ADD_PET':
            return{
                pets: [
                    ...state.pets,
                    action.pet
                ]
            };
        
        case 'REMOVE_PET':
            var removedPet = state.pets.findIndex(pet => pet.id === action.id);
            return{
                pets: [
                    ...state.pets.slice(0, removedPet),
                    ...state.pets.slice(removedPet + 1)
                ]
            };
            
        default:
            return(state);
    }
}

export function dispatch(action){
    state = managePets(state, action);
    
    render();
}

export function render(){
    var container = document.getElementById('container');
    
    var petList = state.pets.map((pet) => {
        return(`<li>${ pet.name }</li>`);
    }).join(' ');
    
    container.innerHTML = `<ul>${ petList }</ul>`;
}
