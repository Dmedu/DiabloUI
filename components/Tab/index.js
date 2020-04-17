/**
 * Tab
 * @author Ethan zhang
 * emali : 610558983@qq.com
 * 2020/04/10
 */

import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    ViewPropTypes
} from 'react-native'
import PropTypes from 'prop-types'

class Tab extends React.Component {

    constructor(props) {
        super(props);
        this._container = null;
        this._scroller = null;
        this._itemLayouts = [];
        this._scrollerContentOffsetX = 0
        this.state = {
            currentActiveIndex: 0,
            textLineHeight: null
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (
            this.props.style !== nextProps.style ||
            this.props.dataItemStyle !== nextProps.dataItemStyle ||
            this.props.activeColor !== nextProps.activeColor ||
            this.props.renderItem !== nextProps.renderItem ||
            this.props.onChange !== nextProps.onChange ||
            this.props.scrollable !== nextProps.scrollable ||
            this.props.showActiveLine !== nextProps.showActiveLine ||
            this.props.showLine !== nextProps.showLine ||
            this.props.lineColor !== nextProps.lineColor ||
            this.state.currentActiveIndex !== nextState.currentActiveIndex ||
            this.props.inactiveColor !== nextProps.inactiveColor ||
            this.state.textLineHeight !== nextState.textLineHeight
        ) {
            return true
        } else {
            return false
        }
    }
    /**
     * @method 设置当前激活item
     * @param { number } index item下标
     */
    setCurrentActiveIndex = (index) => {
        this.setState({ currentActiveIndex: index })
        this.scrollTo(index);
    }

    scrollTo = (index) => {
        if (!this.props.scrollable) {
            return
        }

        this._container.measure((x, y, width) => {
            console.log(width);
            const distance = this.calucateDistance(index, this._scrollerContentOffsetX, width)
            console.log(distance);
            if (distance == null) {
                return
            }
            this._scroller.scrollTo({ x: distance, y: 0, animated: true })
        })
    }

    /**
     * @param { number } index 当前item
     * @param { number } baseX 水平滚动距离
     * @param { number } containerWidth tab宽度
     */
    calucateDistance = (index, baseX, containerWidth) => {
        console.log(this._itemLayouts);
        let distance = null

        // 对缓存的 _itemLayouts 升序排序 返回排序后的数组
        const layouts = this._itemLayouts.sort((a, b) => {
            return a.index - b.index
        })
        console.log(layouts);
        if (!layouts[index] || !layouts[index].layout) {
            return distance
        }
        const targetX = layouts[index].layout.x
        if (targetX > (containerWidth / 2)) {
            distance = targetX - (containerWidth / 2);
        }
        if (targetX <= containerWidth / 2) {
            distance = - (containerWidth / 2) - targetX;
        }
        return distance

    }

    renderItems = () => {
        const {
            data,
            dataItemStyle,
            onChange,
            activeColor,
            showActiveLine,
            inactiveColor,
            tabHeight
        } = this.props
        const {
            currentActiveIndex
        } = this.state

        return data.map((item, index) => {
            return (
                <View
                    key={index}
                    style={StyleSheet.flatten([styles.item, dataItemStyle])}
                    onLayout={e => {
                        console.log(e.nativeEvent);
                        this.handleLayoutItem(index, item, e);
                    }}
                >
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {
                            this.setCurrentActiveIndex(index);
                            onChange && onChange(item, index)
                        }}
                        style={{
                            borderBottomColor: currentActiveIndex == index ? activeColor : 'transparent',
                            borderBottomWidth: currentActiveIndex == index ? (showActiveLine ? 2 : 0) : 2
                        }}
                    >
                        <Text
                            style={StyleSheet.compose(styles.text, {
                                lineHeight: tabHeight,
                                color: currentActiveIndex == index ? activeColor : inactiveColor,
                            })}
                        >{item.label}</Text>
                    </TouchableOpacity>
                </View>
            )
        })
    }

    renderItemContent = (item, index, active) => {

    }
    /**
     * @param { event } e 
     * e.nativeEvent.layout : {
     * height, --元素高度
     * width, --元素宽度
     * x, --元素left距离父级left距离
     * y, --元素top距离父级top距离
     * }
     */
    handleLayoutItem = (index, item, e) => {
        const existed = this._itemLayouts.some((layoutItem) => {
            console.log(layoutItem);
            return layoutItem.index === index
        })
        console.log(existed);
        !existed && e && e.nativeEvent && this._itemLayouts.push({
            index,
            layout: e.nativeEvent.layout
        })
        this.setState({ textLineHeight: e.nativeEvent.layout.height })
        console.log(this._itemLayouts);
    }

    handleScroll = (e) => {
        console.log(e.nativeEvent);
        console.log(e.nativeEvent.contentOffset.x);
        e && e.nativeEvent && e.nativeEvent.contentOffset && (this._scrollerContentOffsetX = e.nativeEvent.contentOffset.x)
    }

    renderDataContent = () => {
        const {
            showLine,
            lineColor,
            renderItem
        } = this.props
        const itemViews = this.renderItems()
        return (
            <View 
                collapsable={false} 
                style={StyleSheet.flatten(
                [
                    styles.content,
                    showLine ? {
                        borderBottomColor: lineColor,
                        borderWidth: 1
                    } : null
                ])}

            >
                { itemViews }
                { renderItem }
            </View>
        )
    }

    render() {
        const {
            scrollable,
            style,
            Component = scrollable ? ScrollView : View,
            tabHeight
        } = this.props
        style && delete style.height
        return (
            <View 
                ref={(c) => { this._container = c }} 
                style={StyleSheet.flatten([
                    styles.container,
                    { height:tabHeight },
                    style
                ])}
            >
                <Component
                    ref={(c) => { this._scroller = c }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={0}
                    onScroll={this.handleScroll}
                >
                    {this.renderDataContent()}
                </Component>
            </View>
        )
    }
}

Tab.defaultProps = {
    activeColor: 'rgba(255,255,255,1)',
    scrollable: true,
    showActiveLine: true,
    showLine: true,
    lineColor: 'rgba(191, 191, 191, .8)',
    inactiveColor: 'rgba(191, 191, 191, .8)',
    tabHeight:50
}

Tab.propTypes = {
    /**
     * 最外层样式
     */
    style: ViewPropTypes.style,
    /**
     * 每个item样式
     */
    dataItemStyle: ViewPropTypes.style,
    /**
     * 激活颜色
     */
    activeColor: PropTypes.string,
    /**
     * 未激活颜色
     */
    inactiveColor: PropTypes.string,
    /**
     * 数据源
     */
    data: PropTypes.array,
    /**
     * 自定义最后一项item
     */
    renderItem: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.node,
        PropTypes.element
    ]),
    /**
     * 切换状态时的回调
     */
    onChange: PropTypes.func,
    /**
     * 是否滚动
     */
    scrollable: PropTypes.bool,
    /**
     * 是否显示激活状态下划线
     */
    showActiveLine: PropTypes.bool,
    /**
     * 是否显示视图下划线
     */
    showLine: PropTypes.bool,
    /**
     * 视图下划线颜色
     */
    lineColor: PropTypes.string,
    /**
     * tab高度
     */
    tabHeight:PropTypes.number
}

export default Tab;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,1)'
    },
    content: {
        flexDirection: 'row'
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 12,
        paddingRight: 12
    },
    text: {
        fontSize: 14
    }
})