export let state;


export function managePets(state = {pets: []}, action){
  switch(action.type){
    case 'ADD_PET':
      return Object.assign({}, {pets:[...state.pets, action.pet]})
    case 'REMOVE_PET':
      return(
        Object.assign({},
          {pets: state.pets.filter(pet=> {
            return pet.hasOwnProperty('id') ? ( pet.id !==action.id ? pet : false) : pet
          })
        })
      )    
    default:
      return state;
  }
}

export function dispatch(action={type: '@@INIT'}){
  state = managePets(state, action)
  render()
}

export function render(){
  let petsList = '<ul>' + state.pets.map(pet=>`<li>${pet.name}</li>`).join('\n') + '</ul>'
  document.getElementById('container').innerHTML = petsList
}
