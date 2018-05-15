export let state;

export function managePets(state = { pets: []}, action){
  switch (action.type) {

    case 'ADD_PET':
      return {
        pets: [
          ...state.pets,
          {
            name: action.pet.name,
            species: action.pet.species,
            id: action.pet.id
          }
        ]
      }

    case 'REMOVE_PET':
      let toDelete = new Set([action.id]);
      let newPetArray = state.pets.filter(pet => !toDelete.has(pet.id));
      return {
        pets: newPetArray
      }

    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let petsList = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`;
  }).join(' ');
  document.getElementById('container').innerHTML = `<ul>${petsList}</ul>`;
}
