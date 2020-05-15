import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Platform,
    StatusBar,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import Text from '../../components/Text'
const ComponentPropTypes = [
    PropTypes.node,
    PropTypes.element,
    PropTypes.func
]
// children : react组件对象中定义children为子组件
const Children = ({ style,children }) => {
    let node
    if (React.isValidElement(children)) {
        node = children
    }
    if (typeof children === 'function') {
        node = children()
    }
    if (children === null && children === false) {
        node = null
    }
    return (
        <View style={StyleSheet.flatten([ style ])}>
            { node }
        </View>
    )
}

const defaultLeftComponent = () => {
    return (
        <TouchableOpacity
        style={styles.componentStyle}
        >
            <AntDesignIcon
                name="left"
                size={18}
                color={'#ddd'}
            />
        </TouchableOpacity>
    )
}

const defaultRightComponent = () => {
    return (
        <TouchableOpacity
            style={styles.componentStyle}
        >
            <AntDesignIcon
                name="more"
                size={18}
                color={'#ddd'}
            />
        </TouchableOpacity>
    )
}

const defaultCenterComponent = () => {
    return (
        <Text h1>123</Text>
    )
}


class Header extends Component {
    render() {
        const {
            statusBarProps,
            barBackgroundColor,
            containerStyle,
            leftComponent = defaultLeftComponent,
            leftContainerStyle,
            rightComponent = defaultRightComponent,
            rightContainerStyle,
            centerComponent = defaultCenterComponent,
            centerContainerStyle,
        } = this.props
        return (
            <View style={StyleSheet.flatten([
                styles.container,
                containerStyle,
                barBackgroundColor && { backgroundColor: barBackgroundColor }
            ])}>
                <StatusBar
                    backgroundColor={barBackgroundColor}
                    {...statusBarProps}
                />
                <Children
                    style={StyleSheet.flatten([
                        leftContainerStyle
                    ])}
                >
                    { leftComponent }
                </Children>
                <Children
                    style={StyleSheet.flatten([
                        centerContainerStyle
                    ])}
                >
                    { centerComponent }
                </Children>
                <Children
                    style={StyleSheet.flatten([
                        rightContainerStyle
                    ])}
                >
                    { rightComponent }
                </Children>
            </View>
        );
    }
}

Header.defaultProps = {
    barBackgroundColor: '#fff'
}

Header.propTypes = {
    /**最外层样式 */
    containerStyle: PropTypes.object,
    /**接受StatusBar的所有props */
    statusBarProps: PropTypes.object,
    /**bar的背景色 */
    barBackgroundColor: PropTypes.string,
    /**左侧组件 */
    leftComponent: PropTypes.oneOfType(ComponentPropTypes),
    /**左侧组件的最外层样式 */
    leftContainerStyle:PropTypes.object,
    /**中间组件 */
    centerComponent: PropTypes.oneOfType(ComponentPropTypes),
    /**中间组件的最外层样式 */
    centerContainerStyle:PropTypes.object,
    /**右侧组件 */
    rightComponent: PropTypes.oneOfType(ComponentPropTypes),
    /**右侧组件的最外层样式 */
    rightContainerStyle:PropTypes.object
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    componentStyle: {
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 13,
        paddingRight: 13
    }
})

export default Header