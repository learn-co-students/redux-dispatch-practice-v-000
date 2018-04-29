export let state;


export function managePets(state = { pets: [] }, action){
    switch (action.type) {
 
      case 'ADD_PET':
        return {...state, pets: [...state.pets, {'name': action.pet.name, 'id': action.pet.id, 'species': action.pet.species }] }
      
      case 'REMOVE_PET':
        let index = state.pets.findIndex((element) => element.id === action.id)
        return {...state, pets:[...state.pets.slice(0,index),...state.pets.slice(index+1)] }
        
      default:
        return state;
    }
}

export function dispatch(action){
    state = managePets(state, action)
    render()
}

export function render(){
    let container = document.getElementById('container');
    let petsList = state.pets.map((pet) => `<li>${pet.name}</li>`).join(" ");
    container.innerHTML = `<ul>${petsList}</ul>`;
    // state.pets.map(pet => document.getElementById("container").innerHTML = `<ul><li>${pet.name}</li></ul>` )
}
