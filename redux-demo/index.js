const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
// const combineReducers = redux.combineReducers();
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
{
  type: BUY_CAKE;
  info: "First redux action";
}
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
// const rootReducer = combineReducers({
//   red: reducer,
//   mid: middleware,
// });
const store = createStore(reducer, applyMiddleware(logger));
console.log("initial state", store.getState());
// const unsubscribe = store.subscribe(() =>
//   console.log("updated state", store.getState())
// );
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
// unsubscribe();
store.dispatch(buyCake());
store.dispatch(buyCake());
