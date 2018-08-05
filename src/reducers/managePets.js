export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case "ADD_PET":
      return {pets: [...state.pets, action.pet]}
    case "REMOVE_PET":
      return {pets: state.pets.filter(p => p.id !== action.id)}
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action);
  render();
}

export function render(){
  const list = document.createElement('ul');
  state.pets.map(pet => {
    let listItem = document.createElement('li');
    listItem.innerHTML = pet.name;
    list.appendChild(listItem);
  })
  document.getElementById('container').innerHTML = list.outerHTML;
}
