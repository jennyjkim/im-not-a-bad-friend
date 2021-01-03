import {
    createStore,
    applyMiddleware,
    Middleware,
    combineReducers,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import homeReducer from './Home/reducer';
import settingsReducer from './Settings/reducer';
import appReducer from './App/reducer';


const reducers = {
    app: appReducer,
    home: homeReducer,
    settings: settingsReducer,
}
const combined = combineReducers(reducers);

let middlewares: Middleware[] = [thunk]
const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });

export default createStore(combined, {}, composeEnhancers(
    applyMiddleware(...middlewares)
))