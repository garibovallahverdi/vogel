import { createStore,applyMiddleware,compose } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import reducers from "../reducers"
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||composeWithDevTools|| compose 

const store =createStore(reducers,composeEnhancers(applyMiddleware(thunk)))
export default store