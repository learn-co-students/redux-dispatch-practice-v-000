export let state;

// this is the reducer
export function managePets(state = {pets:[]}, action){
  switch(action.type) {
    case "ADD_PET":
      return {pets: [...state.pets, action.pet]}
    case "REMOVE_PET":
      return {pets: [...state.pets.filter((pet) => pet.id != action.id)]}
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action);
  render();
}

export function render(){
  var ul = document.createElement('ul');

  state.pets.forEach(pet => {
    console.log(pet)
    var li = document.createElement('li');
    li.innerHTML = pet.name;
    ul.appendChild(li);
  })
  var main = document.getElementById("container");
  main.innerHTML = "";
  main.appendChild(ul);
}
