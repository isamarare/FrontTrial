import React, { Component } from 'react';
import { createStore, applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './store/root-reducers';
import {
  ConnectedRouter,
  routerMiddleware
} from "react-router-redux";
import { createHashHistory } from "history";
import { Route } from "react-router";
import { Link } from 'react-router-dom'
import ReduxThunk from 'redux-thunk'
import { RegisterView } from './containers/RegisterView';
import { AdminView } from './containers/AdminView';

const history = createHashHistory();
const middleware = [routerMiddleware(history),ReduxThunk];

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);
const store = createStore(rootReducers,
  enhancer)

class App extends Component {
  render() {
    return (
    <Provider store={store}>
    <ConnectedRouter history={history}>
    <div>  
    <Route exact path="/" render={()=><div><Link to="/register">Registra tu hermandad rociero</Link></div>} />
    <Route exact path="/register" render={()=><RegisterView/>} />
    {/* <Route exact path="/login" render={()=><RegisterView/>} />
    <Route exact path="/admin" render={()=><RegisterView/>} /> */}
    <Route exact path="/admin" render={()=><AdminView/>} />
    </div>
    </ConnectedRouter>
    </Provider>
    );
  }
}

export default App;


