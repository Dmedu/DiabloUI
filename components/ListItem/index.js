/**
 * ListItem
 * @author Ethan zhang
 * emali : 610558983@qq.com
 * 2020/04/13
 */
import React from 'react'
import {
  Switch,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import EZText from '../Text'
import PropTypes from 'prop-types'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

const RightIcon = <AntDesignIcon name={'right'} color={'rgba(255,255,255,.3)'} size={24} />

const ListItem = ({
  onPress,
  Component = onPress ? TouchableHighlight : View,
  containerStyle,
  bottomDivider,
  topDivider,
  dividerColor,
  title,
  leftComponent,
  titleStyle,
  rightIcon = onPress && RightIcon,
  touchableHighlightProps
}) => {
  return (
    <Component
      onPress={onPress}
      {...touchableHighlightProps}
    >
      <View style={StyleSheet.flatten([
        styles.container,
        containerStyle,
        bottomDivider && {
          borderBottomWidth: 1,
          borderBottomColor: dividerColor || 'rgba(255,255,255,.15)'
        },
        topDivider && {
          borderTopWidth: 1,
          borderTopColor: dividerColor || 'rgba(255,255,255,.15)'
        }
      ])}>
        <View style={styles.leftComponentStyle}>
          {leftComponent}
          <EZText style={StyleSheet.flatten([
            styles.title,
            titleStyle,
            leftComponent && { marginLeft:8 }
          ])}>{title}</EZText>
        </View>
        {rightIcon}
      </View>
    </Component>
  )
}

ListItem.defaultProps = {
  bottomDivider: true,
  topDivider: true,
  title:'title'
}
ListItem.propTypes = {
  /**列表点击事件 */
  onPress: PropTypes.func,
  /**最外层样式 */
  containerStyle: PropTypes.object,
  /**列表底部分割线 */
  bottomDivider: PropTypes.bool,
  /**列表顶部分割线 */
  topDivider: PropTypes.bool,
  /**分割线颜色 */
  dividerColor:PropTypes.string,
  /**列表标题 */
  title:PropTypes.string.isRequired,
  /**列表最左侧显示的组件 */
  leftComponent:PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.node
  ]),
  /**列表标题样式 */
  titleStyle:PropTypes.object,
  /**右侧显示一个icon */
  rightIcon:PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.element,
    PropTypes.func,
    PropTypes.node
  ])
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  leftComponentStyle:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  },
  title:{
    color:'#fff'
  }
})


export default ListItem
