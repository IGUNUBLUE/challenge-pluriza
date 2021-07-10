import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import reducer from './reducer';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
