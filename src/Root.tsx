import * as React from 'react'
import {Provider} from 'react-redux'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

import store from './redux/store'
import {Screen} from './components/Screen'

export default class Root extends React.Component<{}, void> {
    render () {
        return (
            <Provider store={store}>
                <Screen/>
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
