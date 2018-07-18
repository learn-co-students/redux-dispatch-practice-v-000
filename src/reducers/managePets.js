import  jsdom from 'jsdom';
import sinon from 'sinon';
export let state;
global.document = jsdom.jsdom('<html><body><div id="container"></div></body></html>');

export function managePets(state = {pets:[] }, action) {
  switch (action.type){

    case 'ADD_PET':
      const newPet = {'name': action.pet.name, 'species': action.pet.species, 'id': action.pet.id}
      return {pets: (state.pets).concat(newPet)}
    case 'REMOVE_PET':
      if(action.hasOwnProperty('id')){
        const newPets = (state.pets).filter(function(el){
          return el.id !== action.id
        })
        return {pets: newPets}
      }
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action);
  render()
}

export function render(){

  let newPetsList = (state.pets).map(function(i) {
    return "<li>" + i.name + "</li>"
  })
  let newPets = "<ul>"+newPetsList+"</ul>"
  const sternParent = document.getElementById('container')
  sternParent.innerHTML = newPets
}

