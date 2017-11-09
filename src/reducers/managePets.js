export let state;


export function managePets(state={ pets: [] }, action){

  switch (action.type) {
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      return {pets: state.pets.filter((pet) => (pet.id !== action.id))}
    default:
      return state;
  }

}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  // let petsString;
  // if (state.pets.length) {
  //   const petMapString = state.pets.map((pet)=> {
  //     return `<li>${pet.name}<li>`
  //   })
  //   petsString = '<ul>' + petMapString.join('') + '</ul>'
  //   //console.log(petsString)
  // }
  // document.getElementById('container').innerHTML = petsString || ''
  const petsString = (state.pets.length) ? `<ul><li>${state.pets[0].name}</li></ul>` : ''
  document.getElementById('container').innerHTML = petsString

}

// dispatch({type: '@@INIT'})
