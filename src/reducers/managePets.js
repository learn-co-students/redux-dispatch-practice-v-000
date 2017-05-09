export let state;

export function managePets(state={pets: []}, action){
  switch (action.type) {
    case "ADD_PET": 
      return {pets: state.pets.concat(action.pet)}; 
    case "REMOVE_PET": 
      var pets = state.pets.filter(function(pet) {
        return pet.id !== action.id 
      }); 
      return {pets: pets}; 
    default: 
      return state; 
  }
}

export function dispatch(action){
  state = managePets(state, action); 
  render();
}

export function render(){
  var display = "<ul>"; 
  for (var i = 0; i < state.pets.length; i++) {
    display = display + "<li>"+ state.pets[i].name + "</li>"; 
  }
  display = display + "</ul>"
  document.getElementById('container').innerHTML = display; 
}
