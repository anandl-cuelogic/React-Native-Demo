import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './componets/LoginForm';

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
                <LoginForm />
             </Provider>

        );
    }
}
export default App;
