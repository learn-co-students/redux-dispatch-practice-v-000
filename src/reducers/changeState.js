let state = {count: 0};

function changeState(state, action){
  switch (action.type) {
    
    case 'INCREASE_COUNT':
      // return {count: state.count + 1};
      return Object.assign({}, state, {count: state.count + 1})

    case 'frog': 
      return Object.assign({}, state, {msg: 'What a day I am having!'});

    case 'order_state_count_frog_legs':
      return Object.assign({}, state, {frog_legs_order: state.count * 2});
    
      default:
      return state;
  }
}

function dispatch(action){
  state = changeState(state, action)
}

