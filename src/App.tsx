import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const App = () => {
    return (
        <SafeAreaView style={styles.App}>
            <Text>Hello world!</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    App: {
        flex: 1,
        backgroundColor: 'black',
    },
});

export default App;
