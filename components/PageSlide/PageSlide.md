# 可滑动的页面

## 用法

```js
import { PageSlide } from 'react-native-diablo-ui';
const App = () => {
    return (
        <PageSlide
            onScroll={(e) => console.log(e)}
            ref={'PageSlide'}
        >
            <View style={{ flex:1, backgroundColor: 'cyan' }} />
            <View style={{ flex:1, backgroundColor: 'red' }} />
            <View style={{ flex:1, backgroundColor: '#595959' }} />
        </PageSlide>
    )
}
export default App;

```

## props

  - [`onScroll`](#onScroll)
  - [`initialPage`](#initialPage)
  - [`locked`](#locked)

## 参考


### `onScroll`

滑动时的回调

| 类型  | 默认值 |
| :---: | :----: |
| func  |  none  |

---

### `initialPage`

最初的索引

|  类型  | 默认值 |
| :----: | :----: |
| number |   0   |

---

### `locked`

禁止滑动

|  类型   | 默认值 |
| :-----: | :----: |
| boolean | true(可滑动)  |

---

## methods

| 方法          | 描述       |
| ------------- | ---------- |
| scrollToIndex([options]) | 滚动到索引 |

options : 

- `index` (number) : 即将滚动到的索引值（0为滚动到第一个索引值）
- `animated` (bool): 滚动时是否开启动画 (默认为true)

```js
<PageSlide
    onScroll={(e) => console.log(e)}
    ref={'PageSlide'}
>
    <View style={{ flex:1, backgroundColor: 'cyan' }} />
    <View style={{ flex:1, backgroundColor: 'red' }} />
    <View style={{ flex:1, backgroundColor: '#000' }} />
</PageSlide>
```
调用

```js
this.refs.PageSlide.scrollToIndex({ index:1, animated:true });
```