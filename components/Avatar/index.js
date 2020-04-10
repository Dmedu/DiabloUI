/**
 * Avatar
 * @author Ethan zhang
 * email : 610558983@qq.com
 * 2020/04/09
 */

import React from 'react'
import {
    Image as RNImage,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'

const avatarSizes = {
    small: 34,
    medium: 50,
    large: 75,
    xlarge: 150,
}

const Avatar = ({
    onPress,
    Component = onPress ? TouchableOpacity : View,
    size,
    activeOpacity,
    avatarStyle,
    rounded,
    source,
    containerStyle,
    ...imageProps
}) => {
    delete avatarStyle.width;
    delete avatarStyle.height;
    const width = typeof size === 'number' ? size : avatarSizes[size] || avatarSizes.small;
    const height = width;
    const borderRadius = rounded ? ( avatarStyle.borderRadius ? avatarStyle.borderRadius : width / 2 ) : 0;
    return (
        <Component
            onPress={onPress}
            style={StyleSheet.flatten([
                styles.container,
                containerStyle
            ])}
            activeOpacity={activeOpacity}
        >
            <RNImage
                {...imageProps}
                style={StyleSheet.flatten([
                    styles.avatar,
                    { width,height },
                    avatarStyle,
                    { borderRadius }
                  ])}
                source={source}
            />
        </Component>
    )
}

Avatar.defaultProps = {
    size:50,
    rounded:false,
    activeOpacity:.5,
    avatarStyle:{
        borderRadius:null
    },
    containerStyle:{
        width:50,
        height:50
    }
}
Avatar.propTypes = {
    /**
     * 点击头像
     */
    onPress:PropTypes.func,
    /**
     * 组件TouchableOpacity||View
     */
    Component:PropTypes.oneOf([
        TouchableOpacity,
        View
    ]),
    /**
     * 头像大小
     */
    size:PropTypes.oneOfType([
        PropTypes.oneOf([ 'small', 'medium', 'large', 'xlarge' ]),
        PropTypes.number
    ]),
    /**
     * 点击头像透明度 0-1
     */
    activeOpacity:PropTypes.number,
    /**
     * 头像样式
     */
    avatarStyle:PropTypes.object,
    /**
     * 是否使用圆角
     */
    rounded:PropTypes.bool,
    /**
     * 头像地址
     */
    source:RNImage.propTypes.source,
    /**
     * 最外层容器样式
     */
    containerStyle:PropTypes.object,
    /**
     * react-native原生Image属性
     */
    imageProps:PropTypes.object,
    ...RNImage.propTypes
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'transparent'
    },
    avatar:{
        width:null,
        height:null
    }
})

export default Avatar;