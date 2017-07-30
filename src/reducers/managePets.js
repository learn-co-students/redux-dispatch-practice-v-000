export let state;

export function managePets(state = {pets: []}, action){
  switch(action.type){
    case "ADD_PET":
      return Object.assign({}, state, {pets: [...state.pets, action.pet]});

    case "REMOVE_PET":
      var ind = state.pets.findIndex(el => el.id === action.id);
      return Object.assign({}, state,
        {pets: [...state.pets.slice(0,ind),
        ...state.pets.slice(ind+1)]}
      );

    default:
      return state;
  }

}

export function dispatch(action){
  state = managePets(state, action);
  render();
}

export function render(){
  var container = document.createElement("div");
  container.setAttribute("id", "container")
  document.body.appendChild(container);

  var list = document.createElement("ul");

  for(var i = 0; i < state.pets.length; i++){
    var pet = document.createElement("li");
    pet.innerHTML = state.pets[i].name;
    list.appendChild(pet);
  }
  document.getElementById('container').innerHTML = "";
  document.getElementById('container').appendChild(list);
}
