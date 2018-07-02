// let state = {pets: [{name: 'Splash', type: 'turtle', id: 100}]}
// action = {type: "ADD_PET", pet: {name: 'avalanche', species: 'puppy', id: 101}}
// remove is just with id

// instead of using a new variable and working on it dirty,
// use spreads and take pains to work clean

export let state;


export function managePets(state = {pets: []}, action) {
    let newState;
    switch (action.type) {
    case 'ADD_PET':
        newState = {...state};
        newState.pets.push(action.pet);
        return newState;
    case 'REMOVE_PET':
        const indexToRemove = state.pets.findIndex(petObj => {
            return petObj.id == action.id
        });
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

export function dispatch(action) {
    state = managePets(state, action)
    render();
}

export function render(){
    let toInsert = document.getElementById('container');
    const arrayOfLi = state.pets.map(petObj => {
        return `<li>${petObj.name}</li>`
    });
    toInsert.innerHTML = `<ul>${arrayOfLi.join(' ')}</ul>`
}
