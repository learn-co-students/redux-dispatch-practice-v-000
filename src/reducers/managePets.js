export let state;


export function managePets(state = { pets: [] }, action){
  switch (action.type) {
    case 'ADD_PET':
      return {pets: state.pets}
    case 'REMOVE_PET':
      return {}
    default:
      return state;
  }
}



//pass an action to the reducer, use return value to update the state
export function dispatch(action){ 
  state = managePets(state, action)
  render();
}



export function render(){
  document.innerHTML = state.count

  // <div>
  //   <ul id="container">
  //     <li>pet name</li>
  //   </ul>
  // </div>
}
