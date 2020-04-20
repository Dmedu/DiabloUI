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
        this.scrollOnMountCalled = false;
        this.containerWidth = Dimensions.get('window').width;
    }

    /**
     * 处理数组
     * @return array
     */
    _children(children = this.props.children) {
        return React.Children.map(children, (child) => child);
    }
    
    _composeScenes = () => {
        return this._children().map((child, idx) => {
            return <View
                key={child.key}
                style={{ width: this.containerWidth }}
            >
                { child }
            </View>;
        });
    }
    
    renderScrollableContent = () => {
        const scenes = this._composeScenes();
        return <Animated.ScrollView
            horizontal
            pagingEnabled
            automaticallyAdjustContentInsets={false}
            ref={(scrollView) => { this.scrollView = scrollView; }}
            scrollEventThrottle={16}
            scrollsToTop={false}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={!this.props.locked}
            directionalLockEnabled
            alwaysBounceVertical={false}
            keyboardDismissMode="on-drag"
            onScroll={this._onScroll}
            {...this.props.RNScrollViewProps}
        >
            {scenes}
        </Animated.ScrollView>;
    }

    _onScroll = (e)=> {
        if (Platform.OS === 'ios') {
            const offsetX = e.nativeEvent.contentOffset.x;
            if (offsetX === 0 && !this.scrollOnMountCalled) {
                this.scrollOnMountCalled = true;
            } else {
                this.props.onScroll(offsetX / this.containerWidth);
            }
        }
    }

    render() {
        return this.renderScrollableContent();
    }
}

PageSlide.defaultProps = {
    initialPage:1,
    locked:false
}
PageSlide.propTypes = {
    /**
     * 最初的索引
     */
    initialPage:PropTypes.number,
    /**
     * 禁止滑动
     */
    locked:PropTypes.bool,
    /**
     * ScrollView Props 
     * 建议不要使用
     */
    RNScrollViewProps:ScrollView.propTypes
}

export default PageSlide;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

