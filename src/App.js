import React, { Component } from 'react';
import { createStore, applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './store/root-reducers';
import { ChangeName } from './containers/ChangeName';
import { RegistrationForm } from './containers/RegistrationForm';
import {
  ConnectedRouter,
  routerMiddleware
} from "react-router-redux";
import { createHashHistory } from "history";
import { Route } from "react-router";
import { Link } from 'react-router-dom'


const history = createHashHistory();
const middleware = routerMiddleware(history);

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(middleware),
  // other store enhancers if any
);
const store = createStore(rootReducers,
  enhancer)

class App extends Component {
  render() {
    return (
    <Provider store={store}>
    <ConnectedRouter history={history}>
    <div>  
    <Route exact path="/" render={()=><div><Link to="/prueba">adios</Link></div>} />
    <Route exact path="/prueba" render={()=><ChangeName edad={69}/>} />
    <Route exact path="/register" render={()=><RegistrationForm/>} />
    </div>
    </ConnectedRouter>
    </Provider>
    );
  }
}

export default App;


