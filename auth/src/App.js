import React, { Component } from 'react';
import fir from 'firebase';
import { View } from 'react-native';
import { Header, Button } from './components/comman';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = { loggedIn: false };
    componentWillMount() {
     fir.initializeApp({
        apiKey: 'AIzaSyBdtmPJG20MGH8ILvVY_jm1aQX5-6YgcMs',
        authDomain: 'authenitication-abe38.firebaseapp.com',
        databaseURL: 'https://authenitication-abe38.firebaseio.com',
        projectId: 'authenitication-abe38',
        storageBucket: 'authenitication-abe38.appspot.com',
        messagingSenderId: '261916641351'
      });

    // fir.auth.onAuthStateChanged((user) => {
    //     if (user) {
    //       this.setState({ loggedIn: true });
    //     } else {
    //       this.setState({ loggedIn: false });
    //     }
    //  });
    }
  renderContent() {
    if (this.state.loggedIn) {
      return (
        <Button>
          Log Out
        </Button>
      );
    } 
    return <LoginForm />;
  }  
 render() {
    return (
      <View>
          <Header headerText="Authentication" />
           {this.renderContent()}
      </View>
      );
  }
}

export default App;

