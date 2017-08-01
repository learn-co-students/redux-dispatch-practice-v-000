export let state;


export function managePets(state = { pets: [] }, action){
  switch (action.type) {
    case 'ADD_PET':
      return { ...state, pets: [...state.pets, action.pet] };
    case 'REMOVE_PET':
      let newPets = [...state.pets];

      for (var i=0; i<newPets.length; i++) {
        if (newPets[i].id === action.id) {
          newPets.splice(i, 1);
        }
      }

      return {...state, pets: [...newPets]};
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action);
  render();
}

export function render(){
  let container = document.getElementById('container');
  let petHtml = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`;
  }).join(' ');
  container.innerHTML = `<ul>${petHtml}</ul>`;
}
