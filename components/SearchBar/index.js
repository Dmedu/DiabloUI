/**
 * SearchBar
 * @author Ethan Zhang
 * email : 610558983@qq.com
 * 2020/05/11
 */

import React from 'react'
import {
    TextInput,
    StyleSheet,
    View,
    ViewPropTypes,
    TouchableOpacity,
    Text,
    UIManager,
    LayoutAnimation
} from 'react-native'
import PropTypes from 'prop-types'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

class SearchBar extends React.Component {
    state = {
        cancelButtonWidth: null,
        hasFocus: false
    }
    leftIconView = () => {
        const {
            leftIconContainerStyle,
            leftIcon
        } = this.props
        return leftIcon &&
            (
                <View
                    style={StyleSheet.flatten([
                        styles.leftIconContainer,
                        leftIconContainerStyle
                    ])}
                >
                    {leftIcon}
                </View>
            )
    }
    inputLeftIconView = () => {
        const {
            inputLeftIcon
        } = this.props
        return inputLeftIcon ||
            <AntDesignIcon
                name='search1'
                color='rgba(0,0,0,.1)'
                size={18}
            />
    }
    cancelButtonView = () => {
        let {
            cancelButtonTextStyle,
            cancelButtonText,
            showCancelButton,
        } = this.props
        const {
            cancelButtonWidth,
            hasFocus
        } = this.state
        showCancelButton = showCancelButton ? showCancelButton : (cancelButtonText ? true : false)
        return showCancelButton && <View
            style={StyleSheet.flatten([
                styles.cancelContainer,
                {
                    opacity: cancelButtonWidth === null ? 0 : 1,
                    right: hasFocus ? 0 : -cancelButtonWidth
                }
            ])}
            onLayout={(event) => this.setState({ cancelButtonWidth: event.nativeEvent.layout.width })}
        >
            <TouchableOpacity
                onPress={this.cancelButton}
            >
                <Text
                    style={StyleSheet.create([
                        styles.cancelButtonText,
                        cancelButtonTextStyle
                    ])}
                >{cancelButtonText}</Text>
            </TouchableOpacity>
        </View>
    }
    cancelButton = () => {
        this.refs.EZTextInput.blur()
        this._onBlur()
    }
    _onFocus = () => {
        UIManager.configureNextLayoutAnimation && LayoutAnimation.easeInEaseOut()
        this.setState({ hasFocus: true })
    }
    _onBlur = () => {
        UIManager.configureNextLayoutAnimation && LayoutAnimation.easeInEaseOut()
        this.setState({ hasFocus:false })
    }
    render() {
        let {
            containerStyle,
            inputStyle,
            round,
            ...inputProps
        } = this.props
        const { 
            cancelButtonWidth,
            hasFocus
        } = this.state
        const LeftIcon = this.leftIconView()
        const InputLeftIcon = this.inputLeftIconView()
        const CancelButtonView = this.cancelButtonView()
        return (
            <View
                style={StyleSheet.flatten([
                    styles.container,
                    containerStyle
                ])}
            >
                {LeftIcon}
                <View
                    style={StyleSheet.flatten([
                        styles.inputContainerStyle,
                        round && { borderRadius: 4 },
                        hasFocus && { marginRight:cancelButtonWidth }
                    ])}
                >
                    {InputLeftIcon}
                    <TextInput
                        style={StyleSheet.flatten([
                            styles.input,
                            inputStyle
                        ])}
                        ref={'EZTextInput'}
                        selectionColor={'#000'}
                        clearButtonMode={'while-editing'}
                        returnKeyType={'search'}
                        onFocus={this._onFocus}
                        onBlur={this._onBlur}
                        {...inputProps}
                    />
                </View>
                {CancelButtonView}
            </View>
        )
    }
    UNSAFE_componentWillMount(){

    }
}

SearchBar.defaultProps = {
    round: true,
    showCancelButton: true
}
SearchBar.propTypes = {
    /**最外层容器样式 */
    containerStyle: ViewPropTypes.style,
    /**左边icon */
    leftIcon: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func
    ]),
    /**左边icon的外层容器样式 */
    leftIconContainerStyle: ViewPropTypes.style,
    /**输入框样式 */
    inputStyle: PropTypes.object,
    /**是否圆角 */
    round: PropTypes.bool,
    /**输入框左侧icon */
    inputLeftIcon: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func
    ]),
    /** 取消按钮文字样式 */
    cancelButtonTextStyle:PropTypes.object,
    /**是否显示取消按钮 */
    showCancelButton:PropTypes.bool

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 8,
        paddingTop: 4,
        paddingBottom: 4,
        paddingRight: 8
    },
    inputContainerStyle: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.05)',
        fontSize: 16,
        height: 38,
        paddingLeft: 8,
        paddingRight: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 8
    },
    leftIconContainer: {
        paddingRight: 8
    },
    cancelContainer: {
        position: 'absolute',
        paddingLeft:6,
        paddingRight:8
    },
    cancelButtonText:{
        fontSize:18
    }
})
export default SearchBar