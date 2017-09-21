export let state;

export const managePets = (state= {pets: []}, action) => {
  switch (action.type){
    case 'ADD_PET':
      return Object.assign({},state,{
        pets:[
          ...state.pets,
          action.pet
        ]
      })
    case 'REMOVE_PET':
      const indexToRemove = state.pets.findIndex(pet=> pet.id === action.id);
      return Object.assign({},state,{
        pets:[
          ...state.pets.slice(0, indexToRemove),
          ...state.pets.slice(indexToRemove + 1)
        ]
      })

    default:
      return state;
  }
}

export const dispatch = (action) =>{
  state = managePets(state, action)
  render()
}


export const render = () =>{
  let container = document.getElementById("container")
  let petList = state.pets.map(function(pet){
    return "<li>"+ pet["name"] + "</li>"
  }).join(" ")
  container.innerHTML = "<ul>" + petList + "</ul>"
}


