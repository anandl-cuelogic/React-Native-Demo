import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducer';
import { Header } from './componets/common';

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
        <View>
        <Header headerText="Tech Stack" />
        </View>
        </Provider>
    );
};
export default App;
