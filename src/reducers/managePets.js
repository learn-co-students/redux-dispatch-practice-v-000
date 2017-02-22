export let state;


export function managePets(state={pets: []}, action){
  switch(action.type){
    case 'ADD_PET':
      return {...state, pets: [...state.pets, action.payload]}

    case 'REMOVE_PET':
      return {...state, pets: [...state.pets].filter(pet =>
        pet.id !== action.payload
      )}
    default:
      return state
  }

}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let template = state.pets.map(pet =>
    '<li>' + pet.name + '</li>'
  )
  document.getElementById("container").innerHtml = '<ul>' + template + '</ul>'
}
