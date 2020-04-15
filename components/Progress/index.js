/**
 * Progress
 * @author Ethan zhang
 * emali : 610558983@qq.com
 * 2020/04/10
 */
import React from 'react'
import {
  View,
  Animated,
  StyleSheet,
  ViewPropTypes
} from 'react-native'
import PropTypes from 'prop-types'

class Progress extends React.Component {

  state = {
    wrapperWidth: null,
    barWidth: new Animated.Value(0)
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      this.props.easing &&
      nextProps.percent !== this.props.percent
    ) {
      this.toAnimate(
        this.state.barWidth,
        this.getWidthByPercent(this.state.wrapperWidth, this.props.percent),
        this.getWidthByPercent(this.state.wrapperWidth, nextProps.percent),
        this.props.duration
      )
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.percent !== this.props.percent &&
      nextState.barWidth !== this.state.barWidth &&
      nextState.wrapperWidth !== this.state.wrapperWidth

    ) {
      return true;
    } else {
      return false;
    }
  }

  normalPercent = (percent) => {
    let ret = 0

    if (percent != null && percent > 0) {
      ret = percent > 100 ? 100 : percent
    }

    return ret
  }

  getWidthByPercent = (baseWidth, percent) => {
    return baseWidth * (this.normalPercent(percent) / 100)
  }

  onLayout = (e) => {
    if (this.state.wrapperWidth == null) {
      this.setState({
        wrapperWidth: e.nativeEvent.layout.width
      }, () => {

        if (this.props.easing) {
          this.toAnimate(
            this.state.barWidth,
            0,
            this.getWidthByPercent(this.state.wrapperWidth, this.props.percent),
            this.props.duration
          )
        }
      })
    }
  }

  toAnimate = (target, fromValue, toValue, duration) => {
    target.setValue(fromValue)
    Animated.timing(
      target,
      {
        toValue,
        duration: duration
      }
    ).start()
  }

  render() {
    const {
      style,
      barStyle,
      easing,
      percent
    } = this.props

    const { wrapperWidth, barWidth } = this.state

    let percentStyle
    if (wrapperWidth == null) {
      percentStyle = {}
    } else {
      percentStyle = easing ? {
        width: barWidth
      } : { width: this.getWidthByPercent(wrapperWidth, percent) }
    }

    return (
      <View
        style={StyleSheet.flatten([
          progressStyles.wrapper,
          style
        ])}
        onLayout={this.onLayout}
      >
        {
          wrapperWidth == null ? null : (
            easing ? (
              <Animated.View
                style={StyleSheet.flatten([
                  progressStyles.progressBar,
                  barStyle,
                  percentStyle
                ])}
              />
            ) : (
                <View
                  style={StyleSheet.flatten([
                    progressStyles.progressBar,
                    barStyle,
                    percentStyle
                  ])}
                />
              )
          )
        }
      </View>
    )
  }
}

Progress.defaultProps = {
  style: {},
  barStyle: {},
  percent: 0,
  easing: true,
  duration: 300
}

Progress.propTypes = {
  /**
   * 最外层容器样式
   */
  style: ViewPropTypes.style,
  /**
   * bar样式
   */
  barStyle: ViewPropTypes.style,
  /**
   * 当前进度百分比
   */
  percent: PropTypes.number,
  /**
   * 是否启用动画
   */
  easing: PropTypes.bool,
  /**
   * 进度条持续时间
   */
  duration: PropTypes.number
}

const progressStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'transparent',
    borderRadius: 0,
    overflow: 'hidden',
  },
  progressBar: {
    height: 2,
    backgroundColor: '#99CCCC'
  }
})

export default Progress;

