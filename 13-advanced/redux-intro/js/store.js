// Initial state
const defaultState = {
  greeting: 'Hello world',
  calculator: {
    a: 0,
    b: 0,
    total: 0
  }
};

// Action creators: an easy way to create "action" objects
const greetingUpdate = (greeting) => {
  return {
    type: 'GREETING_UPDATE',
    greeting // ES6 magic: Implicitly this is greeting: greeting
  };
};

const numberAUpdate = (n) => {
  return {
    type: 'A_UPDATE',
    a: n
  };
};

const numberBUpdate = (n) => {
  return {
    type: 'B_UPDATE',
    b: n
  };
};

// Reducer
// Takes the current state and an action and returns the new state.
const reducer = (state, action) => {
  console.log( 'ACTION', action );
  switch (action.type) {
    case 'GREETING_UPDATE':
      // The new state has everything from the current state PLUS data from the action.
      var newState = Object.assign( {}, state, {greeting: action.greeting} );
      return newState;
    case 'A_UPDATE':
      var newState = Object.assign( {}, state, {
        calculator: {
          a: action.a,
          b: state.calculator.b,
          total: action.a + state.calculator.b
        }
      });
      return newState;
    case 'B_UPDATE':
      var newState = Object.assign( {}, state, {
        calculator: {
          a: state.calculator.a,
          b: action.b,
          total: state.calculator.a + action.b
        }
      });
      return newState;
    default:
      return state;
  }
};

// Store
const store = Redux.createStore(reducer, defaultState);

const greetingKeypress = (v) => {
  var action = greetingUpdate(v);
  store.dispatch(action);
}

const numberAKeypress = (v) => {
  var action = numberAUpdate(parseInt(v));
  store.dispatch(action);
}

const numberBKeypress = (v) => {
  var action = numberBUpdate(parseInt(v));
  store.dispatch(action);
}

// Components: Zen of the moment
const h1 = (state) => '<h1>' + state.greeting + '</h1>';
const input = (state) => '<input autofocus onkeypress="greetingKeypress(this.value)" value="' + state.greeting + '">';
const calculator = (state) => '<div><input onkeypress="numberAKeypress(this.value)" value="' + state.calculator.a + '">' +
  '<input onkeypress="numberBKeypress(this.value)" value="' + state.calculator.b + '">' +
  '<p>Result: ' + state.calculator.total + '</p></div>';

const render = (state) => h1(state) + input(state) + calculator(state);

const update = () => {
  document.body.innerHTML = render( store.getState() );
  const input = document.querySelector('input');
  input.selectionStart = input.selectionEnd = input.value.length;
}

setInterval(update, 2000);
// store.subscribe(update);
// window.onload = update;
