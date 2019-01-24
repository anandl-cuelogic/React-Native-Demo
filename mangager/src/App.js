import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './componets/LoginForm';
import { Header } from './componets/common';

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
        return (
             <Provider store={createStore(reducers)}>
             <Header headerText={'Navigation'} /> 
                <LoginForm />
             </Provider>

        );
    }
}
export default App;
