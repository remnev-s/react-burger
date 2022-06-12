import { compose, applyMiddleware, combineReducers, createStore } from 'redux';
import { constructorReducer } from './burgerCounstructor';
import thunk from 'redux-thunk';
import { ingredientsReducer } from './burgerIngredients';
import { orderReducer } from './order';
import { viewedIngredientReducer } from './viewedIngredient';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const rootReducer = combineReducers({
  cart: constructorReducer,
  ingredients: ingredientsReducer,
  order: orderReducer,
  viewedIngredient: viewedIngredientReducer,
});
export const store = createStore(rootReducer, enhancer);
