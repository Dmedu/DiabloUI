/**
 * Title
 * @author Ethan zhang
 * emali : 610558983@qq.com
 * 2020/04/10
 */
import React from 'react'
import {
    Text as RNText,
    StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'

const EZText = ({
    style,
    children,
    h1,
    h2,
    h3,
    h4,
    h1Style,
    h2Style,
    h3Style,
    h4Style,
    ...textProps
}) => {
    console.log(style);
    console.log(h1 && styles.text);
    return (
        <RNText
            style={StyleSheet.flatten([
                style && style,
                h1 && styles.text,
                h2 && styles.text,
                h3 && styles.text,
                h4 && styles.text,
                h1 && StyleSheet.flatten([ {fontSize:40}, h1Style]),
                h2 && StyleSheet.flatten([ {fontSize:34}, h2Style]),
                h3 && StyleSheet.flatten([ {fontSize:28}, h3Style]),
                h4 && StyleSheet.flatten([ {fontSize:22}, h4Style]),
            ])}
            {...textProps}
        >
            {children}
        </RNText>
    )
}

EZText.defaultProps = {
    style:{},
    h1:false,
    h2:false,
    h3:false,
    h4:false,
    h1Style:{},
    h2Style:{},
    h3Style:{},
    h4Style:{}
}

EZText.propTypes = {
    /**
     * 文字样式
     */
    style:RNText.propTypes.style,
    /**
     * 嵌套Text
     */
    children:PropTypes.node,
    /**
     * 是否是h1
     */
    h1:PropTypes.bool,
    h2:PropTypes.bool,
    h3:PropTypes.bool,
    h4:PropTypes.bool,
    /**
     * h1标题样式
     */
    h1Style:RNText.propTypes.style,
    h2Style:RNText.propTypes.style,
    h3Style:RNText.propTypes.style,
    h4Style:RNText.propTypes.style
}

const styles = StyleSheet.create({
    text:{
        fontWeight:'bold'
    }
})

export default EZText;