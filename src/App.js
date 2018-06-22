import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './store/root-reducers';
import {
  ConnectedRouter,
  routerMiddleware
} from "react-router-redux";
import { createHashHistory } from "history";
import { Route } from "react-router";
import ReduxThunk from 'redux-thunk'
import { RegisterView } from './containers/RegisterView';
import { AdminView } from './containers/AdminView';
import { LoginPage } from './containers/LoginPage';
import Footer from './components/Footer'
import { Header } from './containers/Header'
import { BrotherhoodList } from './containers/BrotherhoodList';
const history = createHashHistory();
const middleware = [routerMiddleware(history), ReduxThunk];

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
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
            <Header />
            <Route exact path="/" render={() => <div><BrotherhoodList /></div>} />
            <Route exact path="/register" render={() => <RegisterView />} />
            <Route exact path="/admin" render={() => <AdminView />} />
            <Route exact path="/login" render={() => <LoginPage />} />
            <Footer />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;


