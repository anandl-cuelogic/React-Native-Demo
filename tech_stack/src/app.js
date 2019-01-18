import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducer';
import { Header } from './componets/common';
import LibraryList from './componets/LibraryList';

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
        <Header headerText="Tech Stack" />
        <LibraryList />
        </View>
        </Provider>
    );
};
export default App;
