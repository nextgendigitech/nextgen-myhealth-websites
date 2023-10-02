import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './services/reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    // composeWithDevTools(applyMiddleware(...middleware)),  // remove in production
    applyMiddleware(...middleware),
);

export default store;