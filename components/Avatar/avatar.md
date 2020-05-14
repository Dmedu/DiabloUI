# 头像

## 用法

```js
import { Avatar } from 'react-native-diablo-ui';
const App = () => {
    return (
        <Avatar
            containerStyle={{width:150,height:150,backgroundColor:'cyan'}}
            size={150}
            source={{uri:'https://facebook.github.io/react-native/img/tiny_logo.png'}}
        />
    )
}
export default App;

```

## props

  - [`onPress`](#onPress)
  - [`size`](#size)
  - [`rounded`](#rounded)
  - [`activeOpacity`](#activeOpacity)
  - [`avatarStyle`](#avatarStyle)
  - [`source`](#source)
  - [`containerStyle`](#containerStyle)
  - [`imageProps`](#imageProps)

## 参考


### `onPress`

按下时的回调函数

|  类型  | 默认值 |
| :----: | :-----: |
| func |   none   |

---

### `size`

头像大小

|  类型  | 默认值 |
| :----: | :-----: |
| string(`small`, `medium`, `large`, `xlarge`) 或 number |   50   |

---

### `rounded`

是否使用圆角

|  类型  | 默认值 |
| :----: | :-----: |
| boolean |   false   |

---

### `activeOpacity`

按下透明度

|  类型  | 默认值 |
| :----: | :-----: |
| number |   0.5   |

---

### `avatarStyle`

头像样式

|  类型  | 默认值 |
| :----: | :-----: |
| object |   none   |

---

### `source`

图片地址

|                                类型                                | 默认值 |
| :----------------------------------------------------------------: | :-----: |
| [ImageSource](https://facebook.github.io/react-native/docs/images) |  none   |

---

### `containerStyle`

最外层样式（包裹图片的容器样式）

|      类型      | 默认值 |
| :------------: | :-----: |
| object |  { width:50,height:50 }   |

---

### `imageProps`

支持所有react-native原生Image组件属性。