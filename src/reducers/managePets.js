export var state

export const managePets = (state = { pets: [] }, action) => {
  switch (action.type) {
    case 'ADD_PET':
      return {...state, pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      const pets = state.pets.filter(function (pet) {
        return pet.id !== action.id
      })
      return {...state, pets: [...pets]}
    default:
      return state
  }
}

export const dispatch = (action) => {
  state = managePets(state, action)
  render()
}

export const render = () => {
  let pets = state.pets
  // let ulElement = document.createElement('ul')
  // pets.forEach((pet) => {
  //   let pet = document.createElement('li')
  //   pet.innerText = pet.name
  //   // // let petElement = `<li>${pet.name}</li>`
  //   // ulElement.innerHTML += petElement
  //   ulElement.app
  // })
  // document.getElementById('container').appendChild(ulElement)
  let petsList = pets.map((pet) => {
    return `<li>${pet.name}</li>`
  }).join('\\n')
  document.getElementById('container').innerHTML = `<ul>${petsList}</ul>`
}
