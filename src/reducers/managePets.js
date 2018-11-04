export let state;


export function managePets(state = { pets: [] }, action){
    switch (action.type) {

    case 'ADD_PET':
        return { pets: [...state.pets, action.pet] }//add pet }
    case 'REMOVE_PET':
 	return { pets: [...state.pets].filter(pet => pet.id != action.id) }//remove pet
      default:
        return state;
    }
}

export function dispatch(action){
	state =	managePets(state, action)
	render()
}

export function render(){
//	var html = '<div className="container"><ul>';
	var html = '<ul>';

	for(let i = 0; i < state.pets.length; i++){
	    html+= '<li>'+state.pets[i].name+'</li>';
  	}
	    html += '</ul>';
//	    html += '</div>';

	document.getElementById("container").innerHTML = html
}


//Overview

//Ever have that feeling where you are just surrounded by so many of your pets that you start to lose track of all of them. Well now there's an app for that-- or there will be-- you're going to build it! By dispatching actions such as "ADD_PET" and "REMOVE_PET" to your reducer, you will track your current pets and display them in a beautiful <ul> in the browser.
//Instructions

//In managePets.js you need to write three functions managePets, dispatch, and render.

//    The managePets reducer function needs to have a sensible default state
//    dispatch should pass an action to the reducer and use that return value to update the state, a globally accessible variable
//    Since our users want to see their pets on a webpage we want to have a render method that inserts a <ul> to the DOM with each pet's name wrapped in an <li>. The <ul> should be a child of an element with the id of container. There's no need to load jQuery into our app for such a small task. We can make use of built-in JavaScript methods like document.getElementById.

