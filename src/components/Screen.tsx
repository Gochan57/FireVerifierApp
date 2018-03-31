import * as React from 'react'
import {
    Button,
    ListView,
    ListViewDataSource,
    Picker,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native'
import {connect} from 'react-redux';

import * as Model from '../models'
import * as Actions from '../redux/actions'

export interface Props {
}

export interface DispatchProps {
    initApp: () => void
}

export interface StateProps extends Model.State {
}

export interface State {
    comment: string
}

class ScreenContainer extends React.Component<Props & DispatchProps & StateProps, State> {

    constructor (props: Props & DispatchProps & StateProps) {
        super(props)
        this.state = {
            comment: null
        }
    }

    componentWillMount () {
        this.props.initApp()
    }

    renderFirstScreen() {
        return (
            <View style={[styles.firstContainer]}>
                <Text>Приложите устройтво к nfc метке датчика</Text>
            </View>
        )
    }

    renderSecondScreen() {
        return (
            <View style={styles.secondContainer}>
                <Text style={styles.label}>
                    {'Датчик пожарной безопасности № 57 - ТЦ Универ Сити - второй этаж'}
                </Text>
                <TextInput
                    style={styles.textInput}
                    editable={true}
                    multiline={true}
                    numberOfLines={5}
                    value={this.state.comment}
                    onChange={(text) => {
                        this.setState({...this.state, comment: text.nativeEvent.text})
                    }}
                    placeholder={'Комментарий'}
                />
                <Button
                    color={'green'}
                    onPress={() => {}}
                    title={'OK'}
                />
                <Button
                    color={'red'}
                    onPress={() => {}}
                    title={'не OK'}
                />
            </View>
        )
    }

    render () {
        return this.props.nfc
            ? this.renderSecondScreen()
            : this.renderFirstScreen()
    }
}

const mapStateToProps = (state: Model.AppState) => {
    return {...state.app}
}

export const Screen = connect(mapStateToProps, {...Actions})(ScreenContainer)

const styles = StyleSheet.create({
    firstContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
        backgroundColor: 'white',
    } as React.ViewStyle,

    firstText: {
        fontSize: 18
    } as React.TextStyle,

    secondContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 50,
        backgroundColor: 'white',
    } as React.ViewStyle,

    label: {
        fontSize: 15
    } as React.TextStyle,

    textInput: {
        margin: 20,
        paddingLeft: 10,
        width: 300,
        height: 100,
        borderWidth: 1,
        borderColor: 'gray'
    } as React.TextStyle,

    button: {
        width: 200,
        height: 50,
        margin: 20,
    } as React.ViewStyle,

    buttonOk: {
        backgroundColor: 'green'
    } as React.ViewStyle,

    buttonNotOk: {
        backgroundColor: 'red'
    } as React.ViewStyle,
})
