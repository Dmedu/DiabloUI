/**
 * Header
 * @author Ethan zhang
 * email : 610558983@qq.com
 * 2020/04/09
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StatusBar,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Text from './Text'
import Image from './Image'

const ComponentPropTypes = [
    PropTypes.node,
    PropTypes.element,
    PropTypes.func,
    PropTypes.bool
]

const COMPONENT_STYLE = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
}

// children : react组件对象中定义children为子组件
const Children = ({ style, children, placement, viewProps }) => {
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
        <View
            style={StyleSheet.flatten([
                styles.childrenStyle,
                styles.childrenContainerStyle(placement),
                style
            ])}
            {...viewProps}
        >
            {node}
        </View>
    )
}

class Header extends Component {
    defaultRightComponent = () => {
        const { 
            rightOnPress
        } = this.props
        return (
            <TouchableOpacity
                onPress={rightOnPress}
            >
                <Ionicons
                    name="ios-more"
                    size={24}
                    color={'#999'}
                />
            </TouchableOpacity>
        )
    }
    defaultLeftComponent = () => {
        const { leftOnPress } = this.props
        return (
            <TouchableOpacity
                onPress={leftOnPress}
            >
                <AntDesignIcon
                    name="left"
                    size={24}
                    color={'#999'}
                />
            </TouchableOpacity>
        )
    }
    defaultCenterComponent = () => {
        const {
            centerTitle,
            centerSubTitle,
            centerOnPress,
            imageProps
        } = this.props
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={centerOnPress}
            >
                <View style={StyleSheet.flatten([
                    styles.defaultCenterComponentContainer
                ])}>
                    <Image
                        style={StyleSheet.flatten([
                            styles.defaultCenterComponentImage
                        ])}
                        {...imageProps}
                    />
                    <View style={StyleSheet.flatten([
                        styles.titleBox
                    ])}>
                        <Text
                            style={StyleSheet.flatten([
                                styles.centerComponentTitle,
                                styles.centerTitle
                            ])}
                            numberOfLines={1}
                        >{centerTitle}</Text>
                        <Text
                            style={StyleSheet.flatten([
                                styles.centerComponentTitle,
                                styles.centerSubTitle
                            ])}
                            numberOfLines={1}
                        >{centerSubTitle}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        let {
            statusBarProps,
            barBackgroundColor,
            containerStyle,
            underline,
            leftComponent = this.defaultLeftComponent(),
            leftContainerStyle,
            rightComponent = this.defaultRightComponent(),
            rightContainerStyle,
            centerComponent = this.defaultCenterComponent(),
            centerContainerStyle,
            centerComponentPlacement
        } = this.props
        return (
            <View style={StyleSheet.flatten([
                styles.container,
                barBackgroundColor && { backgroundColor: barBackgroundColor },
                underline && {
                    borderBottomColor:'#eee',
                    borderBottomWidth:1
                },
                containerStyle
            ])}>
                <StatusBar
                    backgroundColor={barBackgroundColor}
                    {...statusBarProps}
                />
                <Children
                    style={StyleSheet.flatten([
                        styles.leftRightComponentStyle,
                        leftContainerStyle
                    ])}
                    placement="left"
                >
                    {leftComponent}
                </Children>
                <Children
                    style={StyleSheet.flatten([
                        styles.centerComponentStyle,
                        styles.childrenContainerStyle(centerComponentPlacement),
                        centerContainerStyle
                    ])}
                    placement="center"
                >
                    {centerComponent}
                </Children>
                <Children
                    style={StyleSheet.flatten([
                        styles.leftRightComponentStyle,
                        rightContainerStyle
                    ])}
                    placement="right"
                >
                    {rightComponent}
                </Children>
            </View>
        );
    }
}

Header.defaultProps = {
    barBackgroundColor: '#fff',
    centerComponentPlacement: 'center',
    underline:true
}

Header.propTypes = {
    /**最外层样式 */
    containerStyle: PropTypes.object,
    /**是否显示下划线 */
    underline:PropTypes.bool,
    /**接受StatusBar的所有props */
    statusBarProps: PropTypes.object,
    /**bar的背景色 */
    barBackgroundColor: PropTypes.string,
    /**左侧组件 */
    leftComponent: PropTypes.oneOfType(ComponentPropTypes),
    /**左侧组件的最外层样式 */
    leftContainerStyle: PropTypes.object,
    /**中间组件 */
    centerComponent: PropTypes.oneOfType(ComponentPropTypes),
    /**中间组件的最外层样式 */
    centerContainerStyle: PropTypes.object,
    /**中间组件对齐方式 */
    centerComponentPlacement: PropTypes.oneOf(['left', 'right', 'center']),
    /**右侧组件 */
    rightComponent: PropTypes.oneOfType(ComponentPropTypes),
    /**右侧组件的最外层样式 */
    rightContainerStyle: PropTypes.object,
    /**如果使用默认中间组件-中间组件标题 */
    centerTitle:PropTypes.string,
    /**如果使用默认中间组件-中间组件副标题 */
    centerSubTitle:PropTypes.string,
    /**如果使用默认中间组件-中间组件图片-支持所有RN原生ImageProps */
    imageProps:PropTypes.object,
    /**中间组件点击回调 */
    centerOnPress:PropTypes.func,
    /**left组件点击回调 */
    leftOnPress:PropTypes.func,
    /**right组件点击回调 */
    rightOnPress:PropTypes.func
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 44
    },
    leftRightComponentStyle: {
        flex: 1,
        paddingHorizontal: 15
    },
    centerComponentStyle: {
        flex: 12
    },
    childrenContainerStyle: (placement) => (
        {
            flexDirection: 'row',
            justifyContent: COMPONENT_STYLE[placement]
        }
    ),
    defaultCenterComponentImage: {
        height: 32,
        width: 32,
        borderRadius: 4
    },
    defaultCenterComponentContainer: {
        flexDirection: 'row'
    },
    centerComponentTitle: {
        fontSize: 12,
        maxWidth: 100
    },
    centerTitle: {
        color: '#666'
    },
    centerSubTitle: {
        color: '#444'
    },
    titleBox: {
        paddingHorizontal: 5
    }
}

export default Header