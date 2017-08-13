export let state;

export function managePets(state = { pets: [] }, action){
 switch (action.type) {
   case 'ADD_PET':
     return {pets: [...state.pets, action.pet]}

   case 'REMOVE_PET':
     let removePetId = action.id
     let removePets = state.pets.filter(function(p){return p.id !== removePetId})
     return {pets: removePets}
   default:
     return state;
 }
}

export function dispatch(action){
 state = managePets(state, action)
 render()
}

export function render(){
 let lineItems = state.pets.map( p => `<li>${p.name}</li>`)
 let html = `<ul>${lineItems.join('')}</ul>`
 document.getElementById('container').innerHTML = html
}
