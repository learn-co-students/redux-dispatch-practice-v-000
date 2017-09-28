export let state;


export function managePets(state = { pets: [] }, action){
  switch (action.type) {
    case 'ADD_PET':
      return {
        ...state,
        pets: [
          ...state.pets,
          action.pet
        ]}
    case 'REMOVE_PET':
      let newPets = state.pets.filter((pet) => {
        return pet.id !== action.id;
      })
      return {
        ...state,
        pets: [
          ...newPets
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
  let parent = document.getElementById('container');

  const petsLis = state.pets.map(pet => {
    return `<li>${pet.name}</li>`
  });

  parent.innerHTML = `<ul>${petsLis}</ul>`
}
