# 头像

## 用法

```js
import { Header } from 'react-native-diablo-ui';
const App = () => {
    return (
        <Header
          centerTitle="title"
          centerSubTitle='subTitle'
          imageProps={{
            source:centerTitleImg
          }}
          barBackgroundColor={'#fff'}
        />
    )
}
export default App;

```

## props

  - [`containerStyle`](#containerStyle)
  - [`underline`](#underline)
  - [`statusBarProps`](#statusBarProps)
  - [`barBackgroundColor`](#barBackgroundColor)
  - [`leftComponent`](#leftComponent)
  - [`leftContainerStyle`](#leftContainerStyle)
  - [`centerComponent`](#centerComponent)
  - [`centerContainerStyle`](#centerContainerStyle)
  - [`centerComponentPlacement`](#centerComponentPlacement)
  - [`rightComponent`](#rightComponent)
  - [`rightContainerStyle`](#rightContainerStyle)
  - [`centerTitle`](#centerTitle)
  - [`centerSubTitle`](#centerSubTitle)
  - [`imageProps`](#imageProps)
  - [`centerOnPress`](#centerOnPress)
  - [`leftOnPress`](#leftOnPress)
  - [`rightOnPress`](#rightOnPress)

## 参考


### `containerStyle`

最外层样式

|  类型  | 默认值 |
| :----: | :-----: |
| object |   none   |

---

### `underline`

是否显示下划线

|  类型  | 默认值 |
| :----: | :-----: |
| bool |   true   |

---

### `statusBarProps`

接受StatusBar的所有props

---

### `barBackgroundColor`

bar的背景色

|  类型  | 默认值 |
| :----: | :-----: |
| string |   #fff   |

---

### `leftComponent`

左侧组件

- `false` 或 `null`不显示组件

|  类型  | 默认值 |
| :----: | :-----: |
| node ||  element || func || bool|   none   |

---

### `leftContainerStyle`

左侧组件的最外层样式

|   类型  | 默认值 |
| :----: | :-----: |
| object |  none   |

---

### `centerComponent`

中间组件

- `false` 或 `null`不显示组件

|  类型  | 默认值 |
| :----: | :-----: |
| node ||  element || func || bool|   none   |

---

### `centerContainerStyle`

中间组件的最外层样式

|   类型  | 默认值 |
| :----: | :-----: |
| object |  none  |

### `centerComponentPlacement`

中间组件对齐方式

|   类型  | 默认值 |
| :----: | :-----: |
| string(`left`或`right`或`center`) |  'center'   |

### `rightComponent`

右侧组件

- `false` 或 `null`不显示组件

|  类型  | 默认值 |
| :----: | :-----: |
| node ||  element || func || bool|   none   |

### `rightContainerStyle`

右侧组件的最外层样式

|   类型  | 默认值 |
| :----: | :-----: |
| object |  none   |

### `centerTitle`

如果使用默认中间组件-中间组件标题

|   类型  | 默认值 |
| :----: | :-----: |
| string |  none   |

### `centerSubTitle`

如果使用默认中间组件-中间组件副标题 

|   类型  | 默认值 |
| :----: | :-----: |
| string |  none   |

### `imageProps`

如果使用默认中间组件-中间组件图片-支持所有RN原生ImageProps

```js
let imageProps = {
  source:'https://XXXXXX'
}
<Header
  centerTitle="title"
  centerSubTitle='subTitle'
  imageProps={imageProps}
  barBackgroundColor={'#fff'}
/>
```
|   类型  | 默认值 |
| :----: | :-----: |
| object |  none   |

### `centerOnPress`

中间组件点击回调

|   类型  | 默认值 |
| :----: | :-----: |
| func |  none   |

### `leftOnPress`

left组件点击回调

|   类型  | 默认值 |
| :----: | :-----: |
| func |  none   |

### `rightOnPress`

right组件点击回调

|   类型  | 默认值 |
| :----: | :-----: |
| func |  none   |