export let state;

export const managePets=(state={pets:[]},action)=>{
  switch(action.type){

    case "ADD_PET":
      let newPet = Object.assign({},state,{pets:[...state.pets,action.pet]})
      return newPet
    break;

    case "REMOVE_PET":
      let petId = state.pets.findIndex(pet=>pet.id === action.id)
      return Object.assign({},state,{
        pets: [
          ...state.pets.slice(0,petId),
          ...state.pets.slice(petId+1)
        ]
      })
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

    var pets = state.pets.map( pet => {
      return `<li>${pet.name}</li>`
    }).join(' ')
    container.innerHTML = `<ul>${pets}</ul>`;

}
