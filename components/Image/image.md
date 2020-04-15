# 图像

## 用法

```
import { Image } from 'react-native-diablo-ui';
const App = () => {
    return (
        <Image
            source={require('../../../assets/images/test.jpeg')}
            // containerStyle={{width:100,height:100}}
            style={{width:100,height:100}}
        />
    )
}
export default App;

```

## props

  - [`containerStyle`](#containerStyle)
  - [`style`](#style)
  - [`placeholderStyle`](#placeholderStyle)
  - [`placeholderContent`](#placeholderContent)

## 参考


### `containerStyle`

最外层样式

|  类型  | 默认值 |
| :----: | :-----: |
| object |   none   |

---

### `style`

图片样式

|  类型  | 默认值 |
| :----: | :-----: |
| object |   none   |

---

### `placeholderStyle`

占位视图样式

|  类型  | 默认值 |
| :----: | :-----: |
| object |   none   |

---

### `placeholderContent`

自定义的占位视图

|  类型  | 默认值 |
| :----: | :-----: |
| element object bool func |   none   |

---

### `imageProps`

支持所有react-native原生Image组件属性。