export let state;


export function managePets(state = {pets: []}, action){
  console.log(action);
  switch (action.type) {
    case "ADD_PET":
      return {...state, pets: [...state.pets, action.pet]};
    case "REMOVE_PET":
      return {...state, pets: state.pets.filter((p)=>p.id!=action.id)};
    default:
      return {...state};
  }
}

export function dispatch(action){
  state = managePets(state, action);
  render();
}

export function render(){
  document.getElementById('container').innerHTML = '<ul>'+state.pets.map((pet)=>'<li>'+pet.name+'</li>')+'</ul>'
}
