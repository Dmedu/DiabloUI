# 头像

## 用法

```js
import { SearchBar } from 'react-native-diablo-ui';
const App = () => {
    return (
        <SearchBar 
          cancelButtonText={'Cancel'}
        />
    )
}
export default App;

```

## props

  - [`containerStyle`](#containerStyle)
  - [`leftIcon`](#leftIcon)
  - [`leftIconContainerStyle`](#leftIconContainerStyle)
  - [`inputStyle`](#inputStyle)
  - [`round`](#round)
  - [`inputLeftIcon`](#inputLeftIcon)
  - [`cancelButtonTextStyle`](#cancelButtonTextStyle)
  - [`showCancelButton`](#showCancelButton)

## 参考


### `containerStyle`

最外层容器样式

|  类型  | 默认值 |
| :----: | :-----: |
| object |   none   |

---

### `leftIcon`

左边icon

|  类型  | 默认值 |
| :----: | :-----: |
| element || func |   none   |

---

### `leftIconContainerStyle`

左边icon的外层容器样式

|  类型  | 默认值 |
| :----: | :-----: |
| object |   none   |

---

### `inputStyle`

输入框样式

|  类型  | 默认值 |
| :----: | :-----: |
| object |   none   |

---

### `round`

是否圆角

|  类型  | 默认值 |
| :----: | :-----: |
| bool |   true   |

---

### `inputLeftIcon`

输入框左侧icon

|         类型     | 默认值 |
| :-------------: | :-----: |
| element || func |  none   |

---

### `cancelButtonTextStyle`

取消按钮文字样式

|   类型  | 默认值 |
| :----: | :-----: |
| object |  none  |

---

### `showCancelButton`

是否显示取消按钮

|   类型  | 默认值 |
| :----: | :-----: |
| bool |  true  |

### inputProps

TextInput Props