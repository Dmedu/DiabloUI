/**
 * PageSlide
 * @author Ethan zhang
 * emali : 610558983@qq.com
 * 2020/04/19
 */
import React from 'react'
import {
    Animated,
    StyleSheet,
    View,
    Dimensions,
    ScrollView
} from "react-native"
import PropTypes from 'prop-types'

class PageSlide extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pan: new Animated.ValueXY()
        }
        this.scrollOnMountCalled = false
        this.containerWidth = Dimensions.get('window').width
    }

    /**
     * 处理数组
     * @return array
     */
    _children(children = this.props.children) {
        return React.Children.map(children, (child) => child);
    }

    _composeScenes = () => {
        return Array.isArray(this._children()) && this._children().map((child, idx) => {
            return <View
                key={child.key}
                style={{ width: this.containerWidth }}
            >
                {child}
            </View>;
        });
    }

    renderScrollableContent = () => {
        const scenes = this._composeScenes();
        const locked = scenes.length == 1 ? false : this.props.locked
        if (Platform.OS === 'ios') {
            return <ScrollView
                horizontal
                pagingEnabled
                contentOffset={{ x: this.props.initialPage * this.containerWidth }}
                onScroll={this._onScroll}
                automaticallyAdjustContentInsets={false}
                ref={(scrollView) => { this.scrollView = scrollView; }}
                scrollEventThrottle={16}
                scrollsToTop={false}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={locked}
                directionalLockEnabled
                alwaysBounceVertical={false}
                keyboardDismissMode="on-drag"
                {...this.props.RNScrollViewProps}
            >
                {scenes}
            </ScrollView>;
        }
    }

    _onScroll = (e) => {
        if (Platform.OS === 'ios') {
            const offsetX = e.nativeEvent.contentOffset.x;
            if (offsetX === 0 && !this.scrollOnMountCalled) {
                this.scrollOnMountCalled = true;
            } else {
                this.props.onScroll(offsetX / this.containerWidth);
            }
        }
    }

    scrollToIndex = ({index,animated = true}) => {
        this.scrollView.scrollTo({ x: index * this.containerWidth, y: 0, animated })
    }

    render() {
        return this.renderScrollableContent();
    }
}

PageSlide.defaultProps = {
    initialPage: 0,
    locked: true,
    animated:true
}
PageSlide.propTypes = {
    /**
     * 滑动时的回调
     * 返回滑动的距离
     */
    onScroll:PropTypes.func,
    /**
     * 最初的索引
     */
    initialPage: PropTypes.number,
    /**
     * 禁止滑动 
     * true:可滑动 
     * false:禁止滑动
     */
    locked: PropTypes.bool,
    /**
     * ScrollView Props 
     * 建议不要使用
     */
    ...ScrollView.propTypes
}

export default PageSlide;

