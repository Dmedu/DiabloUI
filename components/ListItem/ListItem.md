图像

## 用法

```js
import { ListItem } from 'react-native-diablo-ui';
const App = () => {
    return (
        <ListItem
          onPress={()=>console.log('click')}
          title='title'
        />
    )
}
export default App;

```

## props

  - [`onPress`](#onPress)
  - [`containerStyle`](#containerStyle)
  - [`bottomDivider`](#bottomDivider)
  - [`topDivider`](#topDivider)
  - [`dividerColor`](#dividerColor)
  - [`title`](#title)
  - [`leftComponent`](#leftComponent)
  - [`titleStyle`](#titleStyle)
  - [`rightIcon`](#)rightIcon

## 参考


### `onPress`

最外层样式

|  类型  | 默认值 |
| :----: | :-----: |
| func |   none   |

---

### `containerStyle`

最外层样式

|  类型  | 默认值 |
| :----: | :-----: |
| object |   none   |

---

### `bottomDivider`

列表底部分割线

|  类型  | 默认值 |
| :----: | :-----: |
| bool |   true   |

---

### `topDivider`

列表顶部分割线

|  类型  | 默认值 |
| :----: | :-----: |
| bool |   true   |

---

### `dividerColor`

分割线颜色

|  类型  | 默认值 |
| :----: | :-----: |
| string |   none   |

### `title`

列表标题

|  类型  | 默认值 |
| :----: | :-----: |
| string |   'title   |

### `leftComponent`

列表最左侧显示的组件

|  类型  | 默认值 |
| :----: | :-----: |
| element || func || node |   none   |

### `titleStyle`

列表标题

|  类型  | 默认值 |
| :----: | :-----: |
| object |   none  |

### `rightIcon`

右侧显示一个icon,如果值为`false`将不显示icon 

|  类型  | 默认值 |
| :----: | :-----: |
| bool || element || func || node |  true  |