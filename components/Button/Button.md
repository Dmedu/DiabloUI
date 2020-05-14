# 头像

## 用法

```js
import { Button } from 'react-native-diablo-ui';
const App = () => {
    return (
        <Button
          title='Button'
          onPress={()=>this._onPress()}
        />
    )
}
export default App;

```

## props

  - [`onPress`](#onPress)
  - [`containerStyle`](#containerStyle)
  - [`disabled`](#disabled)
  - [`buttonStyle`](#buttonStyle)
  - [`title`](#title)
  - [`titleStyle`](#titleStyle)
  - [`round`](#round)
  - [`type`](#type)
  - [`loading`](#loading)

## 参考


### `onPress`

按下时的回调函数

|  类型  | 默认值 |
| :----: | :-----: |
| func |   none   |

---

### `containerStyle`

按钮最外层样式

|  类型  | 默认值 |
| :----: | :-----: |
| object |   none   |

---

### `disabled`

是否禁用，禁用后onPress将注销

|  类型  | 默认值 |
| :----: | :-----: |
| boolean |   false   |

---

### `buttonStyle`

按钮样式

|  类型  | 默认值 |
| :----: | :-----: |
| object |   none   |

---

### `title`

按钮标题

|  类型  | 默认值 |
| :----: | :-----: |
| string |   'button'   |

---

### `titleStyle`

按钮标题样式

|   类型  | 默认值 |
| :----: | :-----: |
| object |  none   |

---

### `round`

圆角

|      类型      | 默认值 |
| :------------: | :-----: |
| bool(`true`,`false`) 或 number 或 string(`50%`) | true  |

---

### `type`

按钮类型

|   类型  | 默认值 |
| :----: | :-----: |
| string(`outline`,`solid`) |  solid  |

### `loading`

是否加载中

|   类型  | 默认值 |
| :----: | :-----: |
| bool |  false   |