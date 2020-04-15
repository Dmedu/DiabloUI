# 进度条

## 用法

```
import { Progress } from 'react-native-diablo-ui';
const App = () => {
    return (
        <Progress
            easing={true}
            percent={50}
            barStyle={{ height: 2 }}
            duration={350}
        />
    )
}
export default App;

```

## props

  - [`style`](#style)
  - [`barStyle`](#barStyle)
  - [`percent`](#percent)
  - [`duration`](#duration)
  - [`easing`](#easing)

## 参考

### `style`

最外层样式

|  类型  | 默认值 |
| :----: | :-----: |
| object |   none   |

---

### `barStyle`

bar样式

|  类型  | 默认值 |
| :----: | :-----: |
| object |   none   |

---

### `percent`

当前进度百分比

|  类型  | 默认值 |
| :----: | :-----: |
| number |   0   |

---

### `duration`

动画持续时间

|  类型  | 默认值 |
| :----: | :-----: |
| number |   300ms   |

---

### `easing`

是否启用动画

|  类型  | 默认值 |
| :----: | :-----: |
| bool |   true   |



