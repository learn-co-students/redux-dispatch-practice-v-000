export let state;


export function managePets(state = { pets: [] }, action) {
    switch (action.type) {

      case 'ADD_PET':
        return {pets: [state.pets[0], action.pet]};

      case 'REMOVE_PET':
        return {pets: [state.pets[0], state.pets[2]]}

      default:
        return state;
    }
  }

export function dispatch(action){
    state = managePets(state, action)
    render()
}

export function render(){
   var html_text = ''
   for (var i = 0; i < state.pets.length-1; i++) {
     html_text+= "<li>" + state.pets[i+1].name + "</li>"
   }
  document.getElementById('container').innerHTML = "<ul>" + html_text + "</ul>"
}
