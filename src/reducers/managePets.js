export let state;


export function managePets(state = { pets: [] }, action){
      switch (action.type) {
 
      case 'ADD_PET':
    return {pets: [...state.pets, action.pet]}
      case 'REMOVE_PET':
       return {pets: state.pets.filter( pet => { 
        return pet.id !== action.id
      })}
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
  state.pets.forEach(function(pet) {
    container.innerHTML = `<ul><li>${pet.name}</li></ul>`
  });
}

// dispatch({type: '@@INIT'})