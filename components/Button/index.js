/**
 * Button
 * @author Ethan zhang
 * email : 610558983@qq.com
 * 2020/04/09
 */

import React from 'react'
import {
    Image as RNImage,
    View,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator
} from 'react-native'
import PropTypes from 'prop-types'
import Text from '../../components/Text'

const ButtonRoundSize = {
  '50%':24,
  true:6,
  false:0
}

class Button extends React.PureComponent{
  loadingView = () => {
    const { loading } = this.props
    return <ActivityIndicator 
    animating={loading}
    size={'small'}
    />
  }
  titleView = () => {
    const {
      title,
      titleStyle,
      type
    } = this.props
    return <Text style={StyleSheet.flatten([
      { color: type === 'outline' ? '#333' : '#fff' },
      titleStyle,
    ])}>{title}</Text>
  }
  render(){
    const {
      containerStyle,
      disabled,
      TouchableComponent = disabled ? View : TouchableOpacity,
      buttonStyle,
      loading,
      round,
      type,
      onPress
    } = this.props
    const LoadingView = loading && this.loadingView()
    const ButtonTitleView = !loading && this.titleView()
    buttonStyle && delete buttonStyle.borderRadius
    const roundValue = ButtonRoundSize.hasOwnProperty(round) ? ButtonRoundSize[round] : round
    return (
      <View style={StyleSheet.flatten([
        styles.container,
        containerStyle
      ])}>
        <TouchableComponent
          onPress={onPress}
          activeOpacity={.8}
        >
          <View style={StyleSheet.flatten([
            styles.button,
            buttonStyle,
            type === 'outline' ? {
              backgroundColor:'transparent',
              borderColor:'#333'
            } : {
              backgroundColor:'#333',
              borderColor:'transparent'
            },
            { 
              borderRadius:roundValue,
              borderWidth:1
            },
          ])}>
            {LoadingView}
            {ButtonTitleView}
          </View>
        </TouchableComponent>
      </View>
    )
  }
}

Button.defaultProps = {
  disabled:false,
  loading:false,
  round:true,
  type:'solid'
}

Button.propTypes = {
  /**按钮最外层样式 */
  containerStyle:PropTypes.object,
  /**是否禁用 */
  disabled: PropTypes.bool,
  /**按钮样式 */
  buttonStyle:PropTypes.object,
  /**按钮标题 */
  title:PropTypes.string.isRequired,
  /**是否加载中 */
  loading:PropTypes.bool,
  /**按钮标题样式 */
  titleStyle:PropTypes.object,
  /**圆角 */
  round:PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.oneOf([ '50%' ]),
  ]),
  /**按钮类型 */
  type:PropTypes.oneOf([ 'outline','solid' ]),
  /**按钮点击事件 */
  onPress:PropTypes.func
}

const styles = StyleSheet.create({
  container:{
    paddingTop:8,
    paddingBottom:8,
    paddingLeft:16,
    paddingRight:16
  },
  button:{
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    height:48
  }
})

export default Button