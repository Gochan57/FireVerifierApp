import * as React from 'react'
import {Provider} from 'react-redux'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'
import {
    StackNavigator,
} from 'react-navigation';

import store from './redux/store'

export default class Root extends React.Component<{}, void> {
    render () {
        return (
            <Provider store={store}>
                <View style={[styles.container]}>
                    <Text>Hello</Text>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    } as React.ViewStyle,
});
