export let state;


export function managePets(state = { pets: [] }, action){
    switch (action.type) {
        case 'ADD_PET':
            return Object.assign({}, state, {
                        pets: [
                            ...state.pets,
                            action.pet
                        ]
                    });
        case 'REMOVE_PET':
            const removalIndex = state.pets.findIndex(pet => pet.id === action.id);
            return Object.assign({}, state, {
                pets: [
                    ...state.pets.slice(0, removalIndex),
                    ...state.pets.slice(removalIndex + 1)
                ]
            });  
        default:
            return state;    
    }
}

export function dispatch(action){
    state = managePets(state, action);
    render();
}

export function render(){
    let resultHtml = '<ul>';
    state.pets.forEach(pet => {
        resultHtml = resultHtml + '<li>' + pet.name + '</li>';
    });
    resultHtml += '</ul>';
    document.getElementById('container').innerHTML = resultHtml;
}
