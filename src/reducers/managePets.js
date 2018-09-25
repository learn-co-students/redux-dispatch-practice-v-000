export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type){
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet]}
      case "REMOVE_PET":
        const removalIndex = state.pets.findIndex(pet => pet.id === action.id);
        return (
          {...state,
              pets: [
                ...state.pets.slice(0, removalIndex),
                ...state.pets.slice(removalIndex + 1)
              ]
          }
        )
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  const container = document.getElementById("container")
  const petsList = state.pets.map((pet)=> {
    return `<ul><li>${pet.name}</li></ul>`
  }).join(' ');
  console.log(petsList)
  container.innerHTML = petsList
}


// let state;
//
// function changeState(state = { count: 0 }, action) {
//     switch (action.type) {
//
//       case 'INCREASE_COUNT':
//         return { count: state.count + 1 }
//
//       default:
//         return state;
//     }
//   }
//
//   function dispatch(action){
//     state = changeState(state, action)
//     render()
// }
//
// function render(){
//     document.innerHTML = state.count
// }
//
// dispatch({type: '@@INIT'})
