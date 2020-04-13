/**
 * Image
 * @author Ethan zhang
 * emali : 610558983@qq.com
 * 2020/04/13
 */
import React from 'react'
import {
    StyleSheet,
    Platform,
    Image as RNImage,
    View,
    Animated,
    ViewPropTypes
} from 'react-native'
import PropTypes from 'prop-types'

class Image extends React.Component {
    state = {
        placeholderOpacity: new Animated.Value(1)
    }
    onLoad = () => {
        const minimumWait = 100;
        const staggerNonce = 200 * Math.random();

        setTimeout(
            () => {
                Animated.timing(this.state.placeholderOpacity, {
                    toValue: 0,
                    duration: 350,
                    useNativeDriver: Platform.OS === 'android' ? false : true,
                }).start();
            },
            Platform.OS === 'android' ? 0 : Math.floor(minimumWait + staggerNonce)
        );
    }

    render() {
        const {
            containerStyle,
            style,
            placeholderStyle,
            placeholderContent,
            ...imageProps
        } = this.props;
        const isImage = Boolean(imageProps.source);

        return (
            <View
                accessibilityIgnoresInvertColors={true}
                style={StyleSheet.flatten([styles.container, containerStyle])}
            >
                <RNImage
                    testID="EZRN_Image"
                    {...imageProps}
                    onLoad={this.onLoad}
                    style={[
                        StyleSheet.absoluteFill,
                        {
                          width: style.width,
                          height: style.height,
                        },
                      ]}
                />

                <Animated.View
                    pointerEvents={isImage ? 'none' : 'auto'}
                    accessibilityElementsHidden={isImage}
                    importantForAccessibility={isImage ? 'no-hide-descendants' : 'yes'}
                    style={[
                        styles.placeholderContainer,
                        {
                          opacity: isImage ? this.state.placeholderOpacity : 1,
                        },
                      ]}
                >
                    <View
                        testID="EZRN_Image_placeholder"
                        style={StyleSheet.flatten([
                            style,
                            styles.placeholder,
                            placeholderStyle
                        ])}
                    >
                        {placeholderContent}
                    </View>
                </Animated.View>

            </View>
        )
    }

}

Image.defaultProps = {
    containerStyle:{
        backgroundColor: 'transparent',
    },
    style:{},
    placeholderStyle: {}
}

Image.propTypes = {
    /**
     * 最外层样式
     */
    containerStyle: ViewPropTypes.style,
    /**
     * 图片样式
     */
    style: RNImage.propTypes.style,
    /**
     * 占位视图样式
     */
    placeholderStyle: ViewPropTypes.style,
    /**
     * 自定义的占位视图
     */
    placeholderContent: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.object,
        PropTypes.bool,
        PropTypes.func
    ]),
    /**
     * RN原生图片
     */
    ...RNImage.propTypes
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        position: 'relative'
    },
    placeholder: {
        backgroundColor: '#bdbdbd',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Image;
