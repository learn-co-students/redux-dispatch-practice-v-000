export let state;


export function managePets(state = { pets: [] }, action){
    switch (action.type){
        case 'ADD_PET':
            return {pets: [...state.pets, action.pet]};
        case 'REMOVE_PET':
            return {pets: state.pets.filter(obj => obj.id != action.id)};
        default:
            return state
    }
}

export function dispatch(action){
    if (state === undefined) { state = { pets: [] }; }
    state = managePets(state, action);
    render();
}

export function render(){
    console.log(state)
    if( state.pets.length > 0) {
        document.getElementById('container').innerHTML = "<ul><li>" + state.pets[0].name + "</li></ul>"
    }
}
