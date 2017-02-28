// Initial state
const defaultState = {
  greeting: 'Hello world'
};

// Action creators
const greetingUpdate = (greeting) => {
  return {
    type: 'GREETING_UPDATE',
    greeting // ES6 magic: Implicitly this is greeting: greeting
  };
};

// Reducer
// Takes the current state and an action and returns the new state.
const reducer = (state, action) => {
  switch (action.type) {
    case 'GREETING_UPDATE':
      // The new state has everything from the current state PLUS data from the action.
      var newState = Object.assign( {}, state, {greeting: action.greeting} );
      return newState;
    default:
      return state;
  }
};

// Store
const store = Redux.createStore(reducer, defaultState);


// Components
const h1 = (state) => '<h1>' + state.greeting + '</h1>';

const render = (state) => h1(state);

const update = () => {
  document.body.innerHTML = render( store.getState() );
}

setInterval(update, 500);
