import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './componets/LoginForm';
import { Header } from './componets/common';
import Router from './Router';

class App extends Component {
    componentWillMount() {
       // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyAyIE5TeqSnLB3zVf9xTzyqwj21hJv3lNo',
    authDomain: 'manager-1397e.firebaseapp.com',
    databaseURL: 'https://manager-1397e.firebaseio.com',
    projectId: 'manager-1397e',
    storageBucket: 'manager-1397e.appspot.com',
    messagingSenderId: '727054300730'
  };
  firebase.initializeApp(config);
}
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
             <Provider store={store}>
              <Router />
             </Provider>

        );
    }
}
export default App;
